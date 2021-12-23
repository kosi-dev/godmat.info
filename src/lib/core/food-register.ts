
import {
	collection,
	query,
	getDocs,
	setDoc,
	getDoc,
	doc,
	deleteDoc,
	where,
	limit,
	updateDoc,
	orderBy,
	Query,
	deleteField
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Food, FoodTag } from './food';

export { FoodRegister };

namespace FoodRegister {
	const max_count: number = 5;

	export async function init() {
		const nameRef = doc(db, 'ext', 'names');
		for (let ref of [nameRef]) {
			getDoc(ref).then((docSnap) => {
				if (!docSnap.exists()) {
					setDoc(ref, {});
				}
			});
		}
	}

	/**
	 * Puts `food` into the database, with `food.getId()` as key.
	 *
	 * @param food the food to put
	 */
	export async function put(food: Food): Promise<void> {
		const ref = doc(db, 'foodRegister', food.getId());
		await setDoc(ref, Object.assign(new Object(), food));
		let data = {};
		data[food.getId()] = food.getName();
		const nameRef = doc(db, 'ext', 'names');
		await updateDoc(nameRef, data);
		console.log(`[DB] Wrote ${food.getName()}`);
	}

	/**
	 * Removes `food` from the database.
	 * `food` will not be removed if it is an ingredient of another food.
	 *
	 * @param food the food to be removed
	 * @returns `true` if `food` was removed, `false` otherwise.
	 */
	export async function remove(food: Food): Promise<boolean> {
		if (food.hasParents()) {
			console.warn(`[DB] Could not delete ${food.getName()}`);
			return false;
		}
		for (let ingredient of await food.getIngredients()) {
			ingredient.removeParent(food);
		}
		const ref = doc(db, 'foodRegister', food.getId());
		await deleteDoc(ref);
		let data = {};
		data[food.getId()] = deleteField();
		const nameRef = doc(db, 'ext', 'names');
		await updateDoc(nameRef, data);
		console.log(`[DB] Deleted ${food.getName()}`);
		return true;
	}

	/**
	 * Gets the food from the database with `id`.
	 *
	 * @param id the id of the food to get
	 * @returns the food with `id`, or null
	 */
	export async function get(id: string): Promise<Food> {
		const ref = doc(db, 'foodRegister', id);
		const docSnap = await getDoc(ref);
		if (docSnap.exists()) {
			const food = Object.assign(new Food(), docSnap.data());
			console.log(`[DB] Read ${food.getName()}`);
			return food;
		} else {
			console.log(`[DB] Could not read ${id}!`);
			return null;
		}
	}

	/**
	 * Gets foods from the database.
	 *
	 * @param tag the tag to filter on
	 * @returns array of all foods
	 */
	export async function getAll(fallback, tag: FoodTag = null) {
		let q: Query = (tag !== null)
			? query(
				collection(db, 'foodRegister'),
				where('_tags', 'array-contains', tag),
				orderBy('_time', 'desc'),
				limit(max_count))
			: query(
				collection(db, 'foodRegister'),
				orderBy('_time', 'desc'),
				limit(max_count));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((docSnap) => {
			fallback(Object.assign(new Food(), docSnap.data()));
		});
		console.log(`[DB] Read all!`);
	}

	/**
	 * Gets all foods whose names include `searchString`.
	 *
	 * @param searchString the string to search for
	 * @param tag the tag to filter on
	 * @returns array of matching foods
	 */
	export async function getMatches(
		searchString: string,
		fallback,
		tag: FoodTag = null
	): Promise<Array<Food>> {
		const nameRef = doc(db, 'ext', 'names');
		const docSnap = await getDoc(nameRef);
		if (!docSnap.exists()) {
			console.log(`[DB] Could not read from ext/names!`);
			return null;
		}
		const data: object = docSnap.data();
		let count = 0;
		for (let key of Object.keys(data)) {
			let name = data[key];
			if (name.toLowerCase().includes(searchString.toLowerCase())) {
				let food: Food = await get(key);
				if (tag === null || food.hasTag(tag)) {
					fallback(food);
					count += 1;
					if (count == max_count) {
						break;
					}
				}
			}
		}
		console.log(`[DB] Read matches of ${searchString}!`);
	}

	export async function writeParents(child: Food) {
		const ref = doc(db, 'foodRegister', child.getId());
		await updateDoc(ref, { _parents: child.getParentIds() });
	}

	export async function hasKey(key: string): Promise<boolean> {
		const ref = doc(db, 'foodRegister', key);
		const docSnap = await getDoc(ref);
		return docSnap.exists();
	}
}

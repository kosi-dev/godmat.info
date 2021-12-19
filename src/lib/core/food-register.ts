
import { db } from '../firebase/firebase';
import { collection, query, getDocs, setDoc, getDoc, doc, deleteDoc, where } from 'firebase/firestore';
import { Food } from './food';
export { FoodRegister }

namespace FoodRegister {
    /**
     * Puts `food` into the database, with `food.getId()` as key.
     * 
     * @param food the food to put
     */
    export async function put(food: Food): Promise<void> {
        const ref = doc(db, "foodRegister", food.getId());
        await setDoc(ref, Object.assign(new Object(), food));
        console.log(`[DB] Wrote ${food.name}`);
    }

    /**
     * Removes `food` from the database.
     * `food` will not be removed if it is an ingredient of another food.
     * 
     * @param food the food to be removed
     * @returns `true` if `food` was removed, `false` otherwise.
     */
    export async function remove(food: Food): Promise<boolean> {
        for (let other of await getAll()) { // Not sure if this is scalable.
            if (other.getId() !== food.getId() && other.hasIngredient(food)) {
                console.warn(`[DB] Could not delete ${food.name}`);
                return false;
            }
        }
        const ref = doc(db, "foodRegister", food.getId());
        await deleteDoc(ref);
        console.log(`[DB] Deleted ${food.name}`);
        return true;
    }

    /**
     * Gets the food from the database with `id`.
     * 
     * @param id the id of the food to get
     * @returns the food with `id`, or null
     */
    export async function get(id: string): Promise<Food> {
        const ref = doc(db, "foodRegister", id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            const food = Object.assign(new Food(), docSnap.data());
            console.log(`[DB] Read ${food.name}`);
            return food;
        } else {
            console.log(`[DB] Could not read ${id}!`);
            return null;
        }
    }

    /**
     * Gets all foods from the database.
     * **This is probably not scalable.**
     * 
     * @returns array of all foods
     */
    export async function getAll(): Promise<Array<Food>> {
        const q = query(collection(db, "foodRegister"));
        const querySnapshot = await getDocs(q);
        const foods: Array<Food> = [];
        querySnapshot.forEach((docSnap) => {
            foods.push(Object.assign(new Food(), docSnap.data()));
        });
        console.log(`[DB] Read all!`);
        return foods;
    }

    /**
     * Gets all foods whose names include `searchString`.
     * **This is probably not scalable.**
     * 
     * @param searchString the string to search for
     * @returns array of matching foods
     */
    export async function getMatches(searchString: string):
            Promise<Array<Food>> {
        const allFoods = await getAll();
        return allFoods.filter((food: Food) => {
            return food.name.toLowerCase().includes(searchString.toLowerCase());
        });
    }
}

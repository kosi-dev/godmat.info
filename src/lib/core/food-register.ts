
import { db } from '../firebase/firebase';
import { collection, query, getDocs, setDoc, getDoc, doc, deleteDoc } from 'firebase/firestore';
import { Food } from './food';
export { FoodRegister }

namespace FoodRegister {
    export async function put(food: Food): Promise<void> {
        const ref = 
            doc(db, "foodRegister", food.getId());
        await setDoc(ref, Object.assign(new Object(), food));
        console.log(`[DB] Wrote ${food.name}`);
    }

    /**
     * Tries to remove the given food from the database.
     * 
     * @param food the food to be removed
     * @returns `false` if food is an ingredient
     * of another food. `true` otherwise.
     */
    export async function remove(food: Food): Promise<boolean> {
        for (let other of await getAll()) { // Not sure if this is scalable.
            if (other.hasIngredient(food)) {
                console.warn(`[DB] Could not delete ${food.name}`);
                return false;
            }
        }
        const ref = 
            doc(db, "foodRegister", food.getId());
        await deleteDoc(ref);
        console.log(`[DB] Deleted ${food.name}`);
        return true;
    }

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
}

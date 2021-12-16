
import { app, db } from './firebase';
import { collection, query, getDocs, setDoc, getDoc, doc } from 'firebase/firestore';
import { Food } from './food';
export { FoodRegister }

namespace FoodRegister {
    export async function register(food: Food) {
        const ref = 
            doc(db, "foodRegister", food.getId());
        await setDoc(ref, Object.assign(new Object(), food));
        console.log(`[DB] Wrote ${food.name}`);
    }

    // public unregister(food: Food) {
    //     this.foods.delete(food.getId());
    // }

    export async function get(id: string): Promise<Food> {
        const ref = doc(db, "foodRegister", id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            const food = Object.assign(new Food(), docSnap.data());
            console.log(`[DB] Read ${food.name}`);
            return food;
        } else {
            console.log(`[DB] Could not read ${id}!`);
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

    // public has(id: string): boolean {
    //     return this.foods.has(id);
    // }
}

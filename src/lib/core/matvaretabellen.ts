import type { User } from 'firebase/auth';
import { Food } from './food';
import { FoodRegister } from './food-register';

export async function addMatvareTabellen(user: User) {
	await fetch('/matvaretabellen.json')
		.then((response) => response.json())
		.then(async (json) => {
			for (let foodData of json.foods) {
				let food: Food = new Food(foodData.name, user.uid, foodData.slug, foodData.nutrition);
				food.addTag(foodData.groupId);
				await FoodRegister.putFood(food);
			}
		})
		.catch((error) => console.error(error));
}

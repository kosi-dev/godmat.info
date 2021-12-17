import { FoodRegister } from './food-register';
import { v4 as uuidv4 } from 'uuid';

export { Food, FoodCategory }

enum FoodCategory {
	Undefined,
	Meat,
	Bread,
	Dairy
}

class Food {
	public name: string;
	public description: string;
	private _category: FoodCategory;
	private _id: string;
	private _basePrice: number;
	private _ingredients: Array<string> = [];

	public constructor(
			name: string = 'Untitled Food',
			category: FoodCategory = FoodCategory.Undefined,
			basePrice: number = 0,
			description: string = 'Empty description.') {
		this.name = name;
		this.description = description;
		this._category = category;
		this._basePrice = basePrice;
		this._id = this.generateId();
	}

	public getName(): string {
		return this.name;
	}
	
	public getId(): string {
		return this._id;
	}

	public getCategory(): FoodCategory {
		return this._category;
	}

	public getDescription(): string {
		return this.description;
	}

	// public async getCategories(deep: boolean = true): Promise<Array<FoodCategory>> {
	// 	let categories: Array<FoodCategory> = [];
	// 	categories.push(this.category);
	// 	(await this.getIngredients()).forEach(async (food: Food) => {
	// 		if (deep) {
	// 			(await food.getCategories()).forEach((category: FoodCategory) => {
	// 				categories.push(category);
	// 			});
	// 		} else {
	// 			categories.push(food.getCategory());
	// 		}
	// 	});
	// 	return categories;
	// }
	
	public setName(name: string) {
		this.name = name;
	}

	private generateId(): string {
		return uuidv4();
	}

	public async addIngredient(food: Food) {
		if (await food.hasIngredient(this)) {
			console.error('Cyclic ingredients are not allowed!');
		}
		this._ingredients.push(food.getId());
		console.log(`Added ${food.name} to ${this.name} ingredients: ${this._ingredients}`);
	}

	// public removeIngredient(food: Food) {
	// 	this.ingredients.delete(food.id);
	// }

	public async getIngredients(): Promise<Array<Food>> {
		let ingredients: Array<Food> = [];
		for (let id of this._ingredients) {
			ingredients.push(await FoodRegister.get(id));
		}
		console.log(`Got ingredients ${JSON.stringify(ingredients)} of ${this.name}`);
		return ingredients;
	}

	public getIngredientIds(): Array<string> {
		console.log(`Got ingredient ids ${JSON.stringify(this._ingredients)} of ${this.name}`);
		return [...this._ingredients];
	}

	public async hasIngredient(food: Food): Promise<boolean> {
		for (let ingredient of await this.getIngredients()) {
			if (ingredient.getId() === food.getId()) {
				console.log(`${this.name} has ingredient ${food.name}`);
				return true;
			}
		}
		console.log(`${this.name} does not have ingredient ${food.name}`);
		return false;
	}

	// public replaceIngredient(from: Food, to: Food) {
	// 	if (this.ingredients.has(from.id)) {
	// 		this.ingredients.delete(from.id)
	// 		this.ingredients.add(to.id)
	// 	}
	// }

	public setBasePrice(basePrice: number) {
		this._basePrice = basePrice;
	}

	public getBasePrice(): number {
		return this._basePrice;
	}

	public async getPrice(): Promise<number> {
		let price = this._basePrice;
		(await this.getIngredients()).forEach(async (food: Food) => {
			price += await food.getPrice();
		});
		console.log(`${this.name} has price ${price}`);
		return price;
	}

	// public async copy(): Promise<Food> {
	// 	let food: Food = new Food(this.name, this.category);
	// 	food.setBasePrice(this.basePrice);
	// 	(await this.getIngredients()).forEach((ingredient: Food) => {
	// 		food.addIngredient(ingredient);
	// 	});
	// 	return food;
	// }
}

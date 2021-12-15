import type { FoodRegister } from './food-register';
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
	public description: string = 'Insert description here..';
	private category: FoodCategory;
	private id: string;
	private basePrice: number;
	private ingredients: Set<string> = new Set();
	private register: FoodRegister;

	public constructor(
			name: string = 'Untitled Food',
			category: FoodCategory = FoodCategory.Undefined,
			basePrice: number = 0) {
		this.name = name;
		this.category = category;
		this.basePrice = basePrice;
	}

	public setRegister(register: FoodRegister) {
		this.register = register;
	}

	public getName(): string {
		return this.name;
	}
	
	public getId(): string {
		if (!this.id) {
			this.id = this.generateId();
		}
		return this.id;
	}

	public getCategory(): FoodCategory {
		return this.category;
	}

	public getDescription(): string {
		return this.description;
	}

	public getCategories(deep: boolean = true): Set<FoodCategory> {
		let categories: Set<FoodCategory> = new Set();
		categories.add(this.category)
		this.getIngredients().forEach((food: Food) => {
			if (deep) {
				food.getCategories().forEach((category: FoodCategory) => {
					categories.add(category);
				});
			} else {
				categories.add(food.getCategory());
			}
		});
		return categories;
	}
	
	public setName(name: string) {
		this.name = name;
	}

	private generateId(): string {
		return uuidv4();
	}

	public addIngredient(food: Food) {
		if (food.hasIngredient(this)) {
			throw new Error('Cyclic ingredients are not allowed!');
		}
		this.ingredients.add(food.id);
	}

	public removeIngredient(food: Food) {
		this.ingredients.delete(food.id);
	}

	public getIngredients(): Set<Food> {
		let ingredients: Set<Food> = new Set();
		this.ingredients.forEach((id: string) => {
			ingredients.add(this.register.get(id));
		});
		return ingredients;
	}

	public hasIngredient(food: Food): boolean {
		for (let ingredient of this.getIngredients()) {
			if (ingredient.getId() === food.getId()
					|| ingredient.hasIngredient(food)) {
				return true;
			}
		}
		return false;
	}

	public replaceIngredient(from: Food, to: Food) {
		if (this.ingredients.has(from.id)) {
			this.ingredients.delete(from.id)
			this.ingredients.add(to.id)
		}
	}

	public setBasePrice(basePrice: number) {
		this.basePrice = basePrice;
	}

	public getPrice(): number {
		let price = this.basePrice;
		this.getIngredients().forEach((food: Food) => {
			price += food.getPrice();
		});
		return price;
	}

	public copy(): Food {
		let food: Food = new Food(this.name, this.category);
		food.setBasePrice(this.basePrice);
		this.getIngredients().forEach((ingredient: Food) => {
			food.addIngredient(ingredient);
		});
		return food;
	}
}

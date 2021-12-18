import { FoodRegister } from './food-register';
import { v4 as uuidv4 } from 'uuid';

export { Food, FoodTagLabels }

enum FoodTag {
	Breakfast,
	Lunch,
	Dinner,
	Vegan,
}

const FoodTagLabels: Map<FoodTag, string> = new Map<FoodTag, string>([
	[FoodTag.Breakfast, '🍳 Frokost'],
	[FoodTag.Lunch, '🥪 Lunsj'],
	[FoodTag.Dinner, '🍲 Middag'],
	[FoodTag.Vegan, '🥗 Vegetar']
]);

class Food {
	public name: string;
	public description: string;
	private _id: string;
	private _basePrice: number;
	private _tags: Array<FoodTag> = [];
	private _ingredients: Array<string> = [];

	/**
	 * Constructs a Food instance.
	 * A unique `_id` is generated.
	 * @param name food name
	 * @param basePrice food base price
	 * @param description food description
	 */
	public constructor(
			name: string = 'Untitled Food',
			basePrice: number = 0,
			description: string = 'Empty description.') {
		this.name = name;
		this.description = description;
		this._basePrice = basePrice;
		this._id = this.generateId();
	}

	public getName(): string {
		return this.name;
	}
	
	public getId(): string {
		return this._id;
	}

	public getTags(): Array<FoodTag> {
		return [...this._tags];
	}

	public getTagNames(): Array<string> {
		return this.getTags().map((foodTag) => FoodTagLabels.get(foodTag));
	}

	public addTag(tag: FoodTag) {
		this._tags.push(tag);
	}

	public hasTag(tag: FoodTag): boolean {
		return this._tags.includes(tag);
	}

	public removeTag(tag: FoodTag) {
		const index: number = this._tags.indexOf(tag);
		if (index !== -1) {
			this._tags.splice(index, 1);
		}
	}

	public getDescription(): string {
		return this.description;
	}

	public setName(name: string) {
		this.name = name;
	}

	private generateId(): string {
		return uuidv4();
	}

	/**
	 * Adds `food` as an ingredient to this food.
	 * Cyclic ingredients will not be added.
	 * 
	 * @param food the ingredient to add
	 * @returns `true` if `food` was added, `false` otherwise
	 */
	public async addIngredient(food: Food): Promise<boolean> {
		if (await food.hasIngredient(this)) {
			console.error('Cyclic ingredients are not allowed!');
			return false;
		}
		this._ingredients.push(food.getId());
		return true;
	}

	/**
	 * Does only return ingredient children, not all decendants.
	 * 
	 * @returns the direct ingredient children
	 */
	public async getIngredients(): Promise<Array<Food>> {
		let ingredients: Array<Food> = [];
		for (let id of this._ingredients) {
			ingredients.push(await FoodRegister.get(id));
		}
		return ingredients;
	}

	public getIngredientIds(): Array<string> {
		return [...this._ingredients];
	}

	/**
	 * Checks if `food` is an ingredient, **recursively** in this' decendants.
	 * 
	 * @param food the ingredient to check for
	 * @returns `true` if food is an ingredient, `false` otherwise
	 */
	public async hasIngredient(food: Food): Promise<boolean> {
		for (let ingredient of await this.getIngredients()) {
			if (ingredient.getId() === food.getId()
					|| ingredient.hasIngredient(food)) {
				return true;
			}
		}
		return false;
	}

	public setBasePrice(basePrice: number) {
		this._basePrice = basePrice;
	}

	public getBasePrice(): number {
		return this._basePrice;
	}

	/**
	 * Calculates price **recursively**, counting all decendants.
	 * 
	 * @returns the total price of this food
	 */
	public async getPrice(): Promise<number> {
		let price = this._basePrice;
		for (let ingredient of await this.getIngredients()) {
			price += await ingredient.getPrice();
		}
		return price;
	}
}

import { FoodRegister } from './food-register';
import dateFormat from 'dateformat';
import { nanoid } from 'nanoid';

export { Food, FoodTag, FoodTagLabels }

enum FoodTag {
	Zero,
	MilkProduct,
	EggProduct,
	MeatProduct,
	FishProduct,
	WheatRicePastaProduct,
	VegetableFruitProduct,
	SugerProduct,
	ButterOilProduct,
	DrinkProduct,
	VariousProduct,
	Babyfood,
	Breakfast,
	Lunch,
	Starters,
	Dinner,
	Dessert,
	Snack,
	Vegetarian,
}

const FoodTagLabels: Map<FoodTag, string> = new Map<FoodTag, string>([
	[FoodTag.Zero, '💀 Zero'],
	[FoodTag.MilkProduct, '🥛 Melk'],
	[FoodTag.EggProduct, '🥚 Egg'],
	[FoodTag.MeatProduct, '🥩 Kjøtt'],
	[FoodTag.FishProduct, '🐟 Fisk'],
	[FoodTag.WheatRicePastaProduct, '🍞 Korn- og bakevarer'],
	[FoodTag.VegetableFruitProduct, '🥦 Frukt og grønnsaker'],
	[FoodTag.SugerProduct, '🍭 Sukker'],
	[FoodTag.ButterOilProduct, '🧈 Smør og olje'],
	[FoodTag.DrinkProduct, '🍹 Drikke'],
	[FoodTag.VariousProduct, '❓ Varierte produkter'],
	[FoodTag.Babyfood, '👶 Babymat'],
	[FoodTag.Breakfast, '🍳 Frokost'],
	[FoodTag.Lunch, '🥪 Lunsj'],
	[FoodTag.Starters, '🧀 Forrett'],
	[FoodTag.Dinner, '🍲 Middag'],
	[FoodTag.Dessert, '🍨 Dessert'],
	[FoodTag.Snack, '🍿 Snacks'],
	[FoodTag.Vegetarian, '🥗 Vegetar']
]);

function getTime() {
	return dateFormat(new Date(), "yyyy.mm.dd hh:MM:ss");
}

class Food {
	public _name: string = '';
	public _description: string = '';
	private _id: string = '';
	private _basePrice: number = 0;
	private _tags: Array<FoodTag> = [];
	private _ingredients: Object = {};
	private _parents: Array<string> = [];
	private _time: string = getTime();
	private _author: string = '';
	private _nutrition: Object = {};
	private _likes: Array<string> = [];

	/**
	 * Constructs a Food instance **without an id**.
	 * 
	 * @param name food name
	 * @param basePrice food base price
	 * @param description food description
	 */
	public constructor(
			name: string = 'Untitled Food',
			author: string = '',
			id = '',
			nutrition: Object = {}) {
		this._name = name;
		this._author = author;
		this._nutrition = nutrition;
		this._id = id.length == 0 ? nanoid(12) : id;
	}

	public getName(): string {
		return this._name;
	}
	
	public getId(): string {
		return this._id;
	}

	public getAuthor(): string {
		return this._author;
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
		return this._description;
	}

	public setDescription(description: string) {
		this._description = description;
	}

	public setName(name: string) {
		this._name = name;
	}

	/**
	 * Adds `food` as an ingredient to this food.
	 * Cyclic ingredients will not be added.
	 * 
	 * @param food the ingredient to add
	 * @returns `true` if `food` was added, `false` otherwise
	 */
	public async addIngredient(ingredient: Food, weight: number = 0)
			: Promise<boolean> {
		if (await ingredient.hasIngredient(this)) {
			console.error('Cyclic ingredients are not allowed!');
			return false;
		}
		this._ingredients[ingredient.getId()] = weight;
		ingredient.addParent(this);
		return true;
	}

	public setIngredientWeight(ingredient: Food, weight: number) {
		this._ingredients[ingredient.getId()] = weight;
	}

	/**
	 * Removes `food` as an ingredient to this food.
	 * 
	 * @param food the ingredient to remove
	 */
	public removeIngredient(ingredient: Food) {
		delete this._ingredients[ingredient.getId()];
		ingredient.removeParent(this);
	}

	/**
	 * Does only return ingredient children, not all decendants.
	 * 
	 * @returns the direct ingredient children
	 */
	public async getIngredients(): Promise<Array<Food>> {
		let ingredients: Array<Food> = [];
		for (let id of Object.keys(this._ingredients)) {
			ingredients.push(await FoodRegister.get(id));
		}
		return ingredients;
	}

	public getIngredientIds(): Array<string> {
		return Object.keys(this._ingredients);
	}

	/**
	 * Checks if `food` is an ingredient, **recursively** in this' decendants.
	 * 
	 * @param food the ingredient to check for
	 * @returns `true` if food is an ingredient, `false` otherwise
	 */
	public async hasIngredient(food: Food): Promise<boolean> {
		for (let ingredient of await this.getIngredients()) {
			if (ingredient.getId() === food.getId() || await ingredient.hasIngredient(food)) {
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

	public getParentIds(): any {
        return [...this._parents];
    }

	public addParent(parent: Food) {
		this._parents.push(parent.getId());
		FoodRegister.writeParents(this);
	}

	public removeParent(parent: Food) {
		const index = this._parents.indexOf(parent.getId());
		if (index != -1) {
			this._parents.splice(index, 1);
			FoodRegister.writeParents(this);
		}
	}

	public hasParents() {
		return this._parents.length != 0;
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

	public getTime() {
		return this._time;
	}

	public getNutrition() {
		return this._nutrition; // TODO: Count ingredients.
	}
}

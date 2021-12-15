
import type { Food } from './food';
export { FoodRegister, register }

class FoodRegister {
    public foods: Map<string, Food> = new Map();
    
    public register(food: Food) {
        if (this.has(food.getId())) {
            console.log(
                '[Warning] A food has been overwritten!');
        }
        this.foods.set(food.getId(), food);
        food.setRegister(this);
    }

    public unregister(food: Food) {
        this.foods.delete(food.getId());
    }

    public get(id: string): Food {
        return this.foods.get(id);
    }

    public has(id: string): boolean {
        return this.foods.has(id);
    }
}

let register = new FoodRegister();
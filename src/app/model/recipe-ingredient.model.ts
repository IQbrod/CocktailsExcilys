import { Ingredient } from './ingredient.model';

export class RecipeIngredient {
    ingredient: Ingredient
    quantity: Number
    unit: string

    constructor(name: string, quantity: Number, unit: string) {
        this.ingredient = new Ingredient(name);
        this.quantity = quantity;
        this.unit = unit;
    }
}
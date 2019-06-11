import { RecipeIngredient } from './recipe-ingredient.model';

export class Recipe {

    id: Number
    name : string
    picture: string
    description: string
    ingredients: RecipeIngredient[]
    instructions: string[]

}
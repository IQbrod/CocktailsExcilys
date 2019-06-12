import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { RecipeIngredient } from '../model/recipe-ingredient.model';
import { RecipeService } from '../service/recipe/recipe.service';
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {

  name: String;
  description: String;
  picture: String;

  constructor(private recipeService: RecipeService, private http: Router) {}

  ngOnInit() {
  }

  submit() {
    var recipe = {
      name: this.name,
      picture: this.picture,
      description: this.description,
      ingredients: [
        {
          ingredient: {name: 'Salt'} as Ingredient,
          quantity: 9000,
          unit: "OVER"
        },
        {
          ingredient: {name: 'Pepper'} as Ingredient,
          quantity: 1,
        }
      ] as RecipeIngredient[],
      instructions: [
        "Instructions come here, but hey ... who cares ? :)"
      ]
    } as Recipe;

    this.recipeService.postRecipe(recipe).subscribe((result) => {this.http.navigateByUrl("/recipes")});
  }
}

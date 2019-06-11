import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  showButtonDetails: Boolean;

  constructor(private recipeService: RecipeService) {
    this.showButtonDetails = true;
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (result) => this.recipes = result
    )
  }
}
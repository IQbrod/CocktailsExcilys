import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  showIngredients: Boolean;
  showInstructions: Boolean;
  @Input()
  showButtonDetails: Boolean;
  @Output()
  removed = new EventEmitter<Number>();

  constructor(private recipeService: RecipeService, private router : Router) {
    this.showIngredients = true;
    this.showInstructions = true;
  }

  ngOnInit() {
  }

  btnIngredients() {
    this.showIngredients = ! this.showIngredients;
  }

  btnInstructions() {
    this.showInstructions = ! this.showInstructions;
  }

  delete() {
    this.recipeService.deleteRecipe(this.recipe.id.toString()).subscribe(
      (result) => {
        this.removed.emit(this.recipe.id)
      }
    )
  }
}

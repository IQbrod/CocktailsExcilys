import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Router } from '@angular/router';

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

  constructor(private router : Router) {
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
}

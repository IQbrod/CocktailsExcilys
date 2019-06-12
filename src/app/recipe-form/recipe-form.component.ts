import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../model/recipe.model';
import { RecipeIngredient } from '../model/recipe-ingredient.model';
import { Ingredient } from '../model/ingredient.model';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl(''),
    ingredients: new FormArray([]),
    instructions: new FormArray([])
  })

  constructor(private recipeService: RecipeService, private http: Router) {}

  ngOnInit() {
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(
      new FormGroup({
        name: new FormControl(''),
        quantity: new FormControl(''),
        unit: new FormControl('')
      })
    )
  }

  addInstruction() {
    this.instructions.push(
      new FormControl('')
    )
  }
  
  submit() {
    var recipe = {
      name: this.recipeForm.get('name').value,
      picture: this.recipeForm.get('picture').value,
      description: this.recipeForm.get('description').value,
      ingredients: [],
      instructions: []
    } as Recipe;

    this.ingredients.value.forEach((ing) => {
      recipe.ingredients.push(new RecipeIngredient(ing.name, ing.quantity, ing.unit));
    });
    
    this.instructions.value.forEach((inst) => {
      recipe.instructions.push(inst);
    });

    this.recipeService.postRecipe(recipe).subscribe((result) => {this.http.navigateByUrl("/recipes")});
  }
}
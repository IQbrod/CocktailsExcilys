import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  id: string;
  recipe: Recipe;
  showButtonDetails: Boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.showButtonDetails = false;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.recipeService.getRecipe(this.id).subscribe( (result: Recipe) =>  this.recipe = result)
  }

}

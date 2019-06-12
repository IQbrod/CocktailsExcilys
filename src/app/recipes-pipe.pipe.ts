import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './model/recipe.model';

@Pipe({
  name: 'recipesPipe'
})
export class RecipesPipePipe implements PipeTransform {

  transform(rec: Recipe[]): Recipe[] {
    return rec.sort((a, b) => {
      if (a.name != null && b.name != null) {
        return a.name.localeCompare(b.name)
      }
    });
  }

}

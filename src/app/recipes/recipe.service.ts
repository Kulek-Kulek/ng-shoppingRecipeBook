import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [new Recipe('Test Recipe', 'Test Description', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Meatball-Alphabet-Soup_EXPS_SSMZ20_22243_E10_10_2b.jpg?resize=1024,1024'), new Recipe('Test2 Recipe', 'Test2 Description', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Meatball-Alphabet-Soup_EXPS_SSMZ20_22243_E10_10_2b.jpg?resize=1024,1024'), new Recipe('Test3 Recipe', 'Test3 Description', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Meatball-Alphabet-Soup_EXPS_SSMZ20_22243_E10_10_2b.jpg?resize=1024,1024')];


  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}

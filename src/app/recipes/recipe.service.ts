import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Super Burger',
      'https://img.taste.com.au/M8fxpuu9/taste/2016/11/beef-burgers-with-double-fried-chips-100842-1.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('Chips', 20)]
    ),
    new Recipe(
      'Steak',
      'Super Nice Steak',
      'https://media.istockphoto.com/photos/hearty-homemade-steak-and-french-fries-picture-id657627186?k=20&m=657627186&s=612x612&w=0&h=tnwlqJpyIIG7xrbomKSvCmjLNOsEuw4PbnhyiTJ9kso=', [new Ingredient('Beef', 1), new Ingredient('Chips', 20), new Ingredient('Salad', 50)]
    ),

    new Recipe(
      'Pizza',
      'Super Pizza',
      'https://cdn.galleries.smcloud.net/t/galleries/gf-e7Nn-BNiB-eWfQ_historia-pizzy-kto-ja-wymyslil-kto-robi-najlepsza-pizze-i-inne-ciekawostki-1920x1080-nocrop.jpg', [new Ingredient('Ham', 5), new Ingredient('Cheese', 10), new Ingredient('Vegetables', 15)]
    )
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}

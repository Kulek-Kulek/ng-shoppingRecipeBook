import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http.put('https://ng-shopping-recipe-book-1c6d2-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(res => {

      });
  }


  fetchRecipes() {
    return this.authService.user.pipe(take(1),
      exhaustMap(user => {
        return this.http
          .get<Recipe[]>
          ('https://ng-shopping-recipe-book-1c6d2-default-rtdb.firebaseio.com/recipes.json')
          .pipe(
            map(recipes => {
              if (!recipes) recipes = [];
              return recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
              })
            }),
            tap(recipes => {
              this.recipeService.setRecipes(recipes)
            })
          )
      })
    )
  }
}

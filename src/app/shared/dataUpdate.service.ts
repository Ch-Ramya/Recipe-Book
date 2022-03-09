import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";
import {map, tap} from "rxjs/operators";

@Injectable()
export class DataUpdateService{
  constructor(private http : HttpClient, private recipeService: RecipeService) {
  }

  storeRecipies(){
    const recipes = this.recipeService.getRecipes();
    this.http.put("https://recipebook-project-21fca-default-rtdb.firebaseio.com/recipes.json", recipes).
    subscribe(
      response => {
        localStorage.setItem("bookmark", JSON.stringify(this.recipeService.getBookmarkRecipes()))
        console.log(response);
      }
    );
  }

  fetchRecipes(){
    return this.http
      .get<Recipe[]>("https://recipebook-project-21fca-default-rtdb.firebaseio.com/recipes.json")
      .pipe(map((recipes: Recipe[]) => {
          return recipes.map(recipe => {
            return {...recipe, ingredients : recipe.ingredients? recipe.ingredients: []};
          });
        }), tap(recipes => {
          this.recipeService.assignRecipes(recipes);
        }))
  }

}

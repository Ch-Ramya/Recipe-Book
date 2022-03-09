import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {bookmarkRecipeModel} from "./bookmarkRecipe.model";
@Injectable()
export class RecipeService{
  private recipes : Recipe[] = [];
  private bookmarkRecipes: bookmarkRecipeModel[] = [];

  constructor(private shoppinglistService : ShoppingListService) {
  }

  assignRecipes(recipeData: Recipe[]){
    this.recipes = recipeData;
  }

  getRecipes(){
    return this.recipes;
  }

  getRecipeById(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
  }

  deleteRecipeFromBookmark(index:number){
    const bookmarks = this.bookmarkRecipes;
    bookmarks.forEach(function(bookmark,i){
      if(bookmark.id == index){
        bookmarks.splice(i,1);
      }
    })
    this.bookmarkRecipes = bookmarks;
  }

  addRecipeToBookmark(index: number, value : boolean){
    const recipe = this.getRecipeById(index);
    recipe["bookMark"] = value;

    if(value){
      const bookmark : bookmarkRecipeModel = new bookmarkRecipeModel(index, recipe["name"],recipe["imagePath"], recipe["description"],recipe["ingredients"]);
      this.bookmarkRecipes.push(bookmark);
    }else{
      this.deleteRecipeFromBookmark(index);
    }
  }



  getBookmarkRecipes(){
    return this.bookmarkRecipes;
  }

  saveBookmarkRecipesToLocalStorage(){
    localStorage.setItem("bookmark", JSON.stringify(this.bookmarkRecipes));
  }

  getBookmarkRecipesFromLocalStorage(){
    const data = (localStorage.getItem("bookmark")) ? JSON.parse(localStorage.getItem("bookmark")) : [];
    return data;
  }
}

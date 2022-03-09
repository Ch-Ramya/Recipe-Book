import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService{
  editShoppingListItem = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('tomato',2),
    new Ingredient('Oranges',3),
    new Ingredient('Onion',2),
    new Ingredient('Potato',5),
    new Ingredient('Sauce',2),
    new Ingredient('Bread',5),
    new Ingredient('Capsicum',2)
  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
  }

  getIngredientsById(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
  }
}

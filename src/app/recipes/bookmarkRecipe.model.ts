import {Ingredient} from "../shared/ingredient.model";

export class bookmarkRecipeModel{
  public id: number;
  public name : string;
  public imagePath : string;
  public description : string;
  public ingredients : Ingredient[]


  constructor(id: number, name : string, image : string, desc: string, ingredients : Ingredient[]){
    this.id = id;
    this.name = name;
    this.imagePath = image;
    this.description = desc;
    this.ingredients = ingredients;
  }
}

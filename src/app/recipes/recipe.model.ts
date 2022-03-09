import {Ingredient} from "../shared/ingredient.model";

export class Recipe{
  public publisher : string;
  public name : string;
  public tagLine: string;
  public description : string;
  public imagePath : string;
  public servings : number;
  public timeTaken : string;
  public bookMark : boolean;
  public ingredients: Ingredient[];



  constructor(owner: string, name : string, tagLine: string, desc: string, image: string, ingredients: Ingredient[], serves : number, timeTaken : string, bookmark: boolean = false){
    this.name = name;
    this.publisher = owner;
    this.tagLine = tagLine;
    this.description = desc;
    this.imagePath = image;
    this.servings = serves;
    this.timeTaken = timeTaken;
    this.bookMark = bookmark;
    this.ingredients = ingredients;
  }
}

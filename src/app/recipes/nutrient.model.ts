export class NutrientModel{
  public carbohydrates : number;
  public fat: number;
  public calories : number;
  public sodium : number;
  public cholestrol : number;

  constructor(carbs:number,fat:number,calories:number,sodium:number,cholestrol:number) {
    this.carbohydrates = carbs;
    this.fat = fat;
    this.calories =calories;
    this.sodium = sodium;
    this.cholestrol = cholestrol;
  }
}

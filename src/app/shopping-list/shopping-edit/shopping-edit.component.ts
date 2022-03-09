import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') shoppingListForm : NgForm;
  editSubscription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription= this.shoppinglistService.editShoppingListItem
      .subscribe(
        (index:number)=>{
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppinglistService.getIngredientsById(index);
          this.shoppingListForm.setValue({
            name : this.editedItem.name,
            amount : this.editedItem.amount
          })
        }
      )
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }


  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }



  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

}

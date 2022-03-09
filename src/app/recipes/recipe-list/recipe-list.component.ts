import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataUpdateService} from "../../shared/dataUpdate.service";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]
  public searchValue : any = '';
  constructor(private recipeService:RecipeService,private dataService : DataUpdateService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSaveData(){
    this.dataService.storeRecipies();
  }

}

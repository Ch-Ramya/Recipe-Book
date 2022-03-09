import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipe.service";
import {bookmarkRecipeModel} from "../bookmarkRecipe.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bookmark-recipe',
  templateUrl: './bookmark-recipe.component.html',
  styleUrls: ['./bookmark-recipe.component.css']
})
export class BookmarkRecipeComponent implements OnInit {
  bookmarkRecipes :bookmarkRecipeModel[] = [];
  constructor(private recipeService : RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.bookmarkRecipes = this.recipeService.getBookmarkRecipes();
  }

  onNavigateToDetail(id: number){
    this.router.navigate(["/recipes",id]);
  }
}

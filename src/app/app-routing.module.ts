import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDefaultComponent} from "./recipes/recipe-default/recipe-default.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {BookmarkRecipeComponent} from "./recipes/bookmark-recipe/bookmark-recipe.component";
import {RecipesResolverService} from "./recipes/recipes-resolver.service";

const appRoutes: Routes =[
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'bookmark', component: BookmarkRecipeComponent},
  {path: 'recipes',component: RecipesComponent, children:[
      {path:'', component: RecipeDefaultComponent, resolve : [RecipesResolverService]},
      {path:'new', component: RecipeEditComponent, resolve : [RecipesResolverService]},
      {path:':id', component: RecipeDetailComponent,resolve : [RecipesResolverService]},
      {path:':id/edit', component: RecipeEditComponent,resolve : [RecipesResolverService]}
    ]},
  {path: '', redirectTo: '/recipes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

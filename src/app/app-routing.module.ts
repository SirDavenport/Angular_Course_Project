import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { DefaultRecipePageComponent } from "./recipes/default-recipe-page/default-recipe-page.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: DefaultRecipePageComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping", component: ShoppingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { DefaultRecipePageComponent } from "./recipes/default-recipe-page/default-recipe-page.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { AuthGuard } from "./auth/auth-guard.service";
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: DefaultRecipePageComponent },
      { path: "new", component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ":id", component: RecipeDetailComponent },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: "shopping", component: ShoppingListComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

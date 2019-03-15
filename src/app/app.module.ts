import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListEditComponent } from "./shopping/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

import { DropdownDirective } from "./shared/dropdown.directive";
import { RecipesService } from "./recipes/recipes.service";
import { ShoppingService } from "./shopping/shopping.service";
import { AppRoutingModule } from "./app-routing.module";
import { DefaultRecipePageComponent } from "./recipes/default-recipe-page/default-recipe-page.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    RecipesComponent,
    DropdownDirective,
    DefaultRecipePageComponent,
    RecipeEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

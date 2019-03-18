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
import { HttpClientModule } from "@angular/common/http";
import { DropdownDirective } from "./shared/dropdown.directive";
import { RecipesService } from "./recipes/recipes.service";
import { ShoppingService } from "./shopping/shopping.service";
import { AppRoutingModule } from "./app-routing.module";
import { DefaultRecipePageComponent } from "./recipes/default-recipe-page/default-recipe-page.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { DataStorageService } from "./shared/data-storage.service";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";

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
    RecipeEditComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RecipesService,
    ShoppingService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

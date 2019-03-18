import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recipes.service";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService
  ) {}
  putRecipes() {
    const token = this.authService.getToken();
    this.httpClient
      .put(
        "https://ng-recipe-book-c57fd.firebaseio.com/recipes.json?auth=" +
          token,
        this.recipeService.getRecipes()
      )
      .subscribe(
        data => {
          console.log("Put request is successful", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient
      .get(
        "https://ng-recipe-book-c57fd.firebaseio.com/recipes.json?auth=" + token
      )
      .pipe(
        map(response => {
          for (let recipe of response as Array<any>) {
            if (!recipe["ingredients"]) {
              console.log(recipe);

              recipe["ingredients"] = [];
            }
          }
          return response;
        })
      )
      .subscribe((response: Recipe[]) => {
        this.recipeService.setRecipes(response);
      });
  }

  createUser(email: string, password: string) {
    this.httpClient
      .put("https://ng-recipe-book-c57fd.firebaseio.com/users.json", {
        email: email,
        password: password
      })
      .subscribe(
        data => {
          console.log("Created user", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
}

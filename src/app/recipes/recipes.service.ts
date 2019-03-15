import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      "Pizza Pie",
      "Test pizza",
      "http://pizzapieguycompany.weebly.com/uploads/5/3/0/4/53045995/s345327815338293276_p4_i1_w487.jpeg",
      [new Ingredient("Cheese", 12), new Ingredient("Pepperoni", 12)]
    ),
    new Recipe(
      2,
      "Peanut Butter and Jelly",
      "Get a load of this pbj",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/1200px-Peanut-Butter-Jelly-Sandwich.png",
      [new Ingredient("Peanutbutter", 3), new Ingredient("Jelly", 2)]
    )
  ];
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    let recipeTemp: Recipe;
    this.recipes.filter(recipe => {
      if (recipe.id === id) {
        recipeTemp = { ...recipe };
      }
    });
    return recipeTemp;
  }

  addIngredientsToCart(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  getRecipeId(recipe: Recipe) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i] === recipe) {
        return i;
      }
      return -1;
    }
  }
  getMaxRecipeId() {
    let max = 0;
    this.recipes.forEach(element => {
      if (element.id > max) {
        max = element.id;
      }
    });
    return max;
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(id: number) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id) {
        this.recipes.splice(i, 1);
      }
    }
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe, id: number) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id) {
        this.recipes[i] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
        return;
      }
    }
  }
}

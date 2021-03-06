import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }
  addIngredientsToCart() {
    this.recipesService.addIngredientsToCart(this.recipe.ingredients);
  }
  deleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe.id);
    this.router.navigate(["/recipes"]);
  }
}

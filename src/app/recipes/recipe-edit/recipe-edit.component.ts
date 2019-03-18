import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { log } from "util";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode = false;
  mySubscription: Subscription;
  error: string;
  constructor(
    private route: ActivatedRoute,
    private rs: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = "";
    let image = "";
    let description = "";
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.rs.getRecipe(this.id);
      recipeName = recipe.name;
      image = recipe.imagePath;
      description = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(
                ingredient.amount,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              )
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(description, Validators.required),
      imagePath: new FormControl(image, Validators.required),
      ingredients: recipeIngredients
    });
  }
  onSubmit() {
    let newRecipe: Recipe;
    let recipeIngredients: Ingredient[] = [];
    if (this.recipeForm.get("ingredients")) {
      for (let ingredient of this.recipeForm.get("ingredients").value) {
        recipeIngredients.push(
          new Ingredient(ingredient.name, ingredient.amount)
        );
      }
    }
    if (this.recipeForm.valid) {
      newRecipe = new Recipe(
        this.rs.getMaxRecipeId() + 1,
        this.recipeForm.get("name").value,
        this.recipeForm.get("description").value,
        this.recipeForm.get("imagePath").value,
        recipeIngredients
      );
      this.rs.addRecipe(newRecipe);
      this.router.navigate(["/recipes", this.id]);
    } else {
      this.error = "Please fill out form correctly.";
    }
  }

  onCancel() {
    this.recipeForm.reset();
    this.router.navigate(["/recipes"]);
  }

  onUpdate() {
    let recipe: Recipe;
    let recipeIngredients: Ingredient[] = [];
    for (let ingredient of this.recipeForm.get("ingredients").value) {
      recipeIngredients.push(
        new Ingredient(ingredient.name, ingredient.amount)
      );
    }
    if (this.recipeForm.valid) {
      recipe = new Recipe(
        this.id,
        this.recipeForm.get("name").value,
        this.recipeForm.get("description").value,
        this.recipeForm.get("imagePath").value,
        recipeIngredients
      );
      this.rs.updateRecipe(recipe, recipe.id);
      this.router.navigate(["/recipes", recipe.id]);
    } else {
      this.error = "Please fill out form correctly.";
    }
  }
  getControls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/))
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
}

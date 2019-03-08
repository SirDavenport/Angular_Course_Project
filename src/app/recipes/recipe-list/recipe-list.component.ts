import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Pizza Pie",
      "Test pizza",
      "http://pizzapieguycompany.weebly.com/uploads/5/3/0/4/53045995/s345327815338293276_p4_i1_w487.jpeg"
    ),
    new Recipe(
      "Peanut Butter and Jelly",
      "Get a load of this pbj",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/1200px-Peanut-Butter-Jelly-Sandwich.png"
    )
  ];
  @Output() recipeClicked2 = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}
  recipeClicked(rec: Recipe) {
    this.recipeClicked2.emit(rec);
  }
}

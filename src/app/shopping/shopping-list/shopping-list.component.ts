import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient("Cheese", 100)];
  constructor() {}

  ngOnInit() {}
  pushIngredient(ingredient: { name: string; amount: number }) {
    this.ingredients.push(ingredient);
  }
}

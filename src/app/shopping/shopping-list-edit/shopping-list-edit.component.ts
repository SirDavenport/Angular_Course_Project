import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @Output() sendIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}
  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.sendIngredient.emit({
      name: nameInput.value,
      amount: amountInput.valueAsNumber
    });
  }
}

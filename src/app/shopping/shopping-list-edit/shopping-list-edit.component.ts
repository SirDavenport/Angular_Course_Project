import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingService } from "../shopping.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  addIngredient(form: NgForm) {
    if (form.valid) {
      this.shoppingService.addIngredient({
        name: form.value.name,
        amount: form.value.amount
      });
    }
  }
  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateItem() {
    this.shoppingService.updateItem(
      new Ingredient(
        this.shoppingForm.value.name,
        this.shoppingForm.value.amount
      ),
      this.editedItemIndex
    );
    this.shoppingForm.reset();
    this.editMode = false;
  }
  deleteItem() {
    if (this.editMode) {
      this.shoppingService.deleteItem(this.editedItemIndex);
      this.shoppingForm.reset();
      this.editMode = false;
    }
  }
}

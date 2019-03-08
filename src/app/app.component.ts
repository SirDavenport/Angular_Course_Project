import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  whereTo: string = "Recipes";
  navClicked(navName: string) {
    this.whereTo = navName;
  }
}

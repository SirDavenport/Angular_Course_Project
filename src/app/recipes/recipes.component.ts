import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html"
})
export class RecipesComponent {
  constructor(private authService: AuthService, private router: Router) {}

  newRecipe() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/signin"]);
    }
  }
}

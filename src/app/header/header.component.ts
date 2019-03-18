import { Component } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(
    private recipeService: RecipesService,
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}

  saveData() {
    this.dataStorage.putRecipes();
  }

  fetchData() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}

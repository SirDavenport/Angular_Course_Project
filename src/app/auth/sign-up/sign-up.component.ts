import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.authService.signupUser(form.value.email, form.value.password);
  }
}

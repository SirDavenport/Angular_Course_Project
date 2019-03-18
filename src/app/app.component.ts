import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDX6FkDI7Sg5SpmaMxc6TMJOGwXVvPXol4",
      authDomain: "ng-recipe-book-c57fd.firebaseapp.com"
    });
  }
}

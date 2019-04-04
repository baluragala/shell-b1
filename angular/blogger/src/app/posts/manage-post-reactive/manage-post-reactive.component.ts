import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "sb-manage-post-reactive",
  templateUrl: "./manage-post-reactive.component.html",
  styleUrls: ["./manage-post-reactive.component.css"]
})
export class ManagePostReactiveComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("awesome react", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
      desc: new FormControl(),
      author: new FormControl(),
      category: new FormControl()
    });
  }
}

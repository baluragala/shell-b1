import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "sb-rating",
  template: `
    <p>rating : {{ value }}</p>
  `,
  styles: []
})
export class RatingComponent implements OnInit {
  @Input()
  value;
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sb-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  author: string;

  @Input()
  desc: string;

  image;

  @Input()
  post;

  @Output()
  fav: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.image = `https://dummyimage.com/120X120/000/e460f0&text=${this.title
      .substring(this.title.length - 4)
      .toUpperCase()}`;
  }

  setAsFavorite(e) {
    this.fav.emit(this.title);
  }
}

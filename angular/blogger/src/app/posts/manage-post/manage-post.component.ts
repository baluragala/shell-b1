import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";
import { Router } from "@angular/router";

@Component({
  selector: "sb-manage-post",
  templateUrl: "./manage-post.component.html",
  styleUrls: ["./manage-post.component.css"]
})
export class ManagePostComponent implements OnInit {
  title;
  desc;
  author;
  category;

  constructor(private service: PostsService, private router: Router) {}

  ngOnInit() {}

  handleSubmit() {
    const { title, desc, author, category } = this;
    console.log({ title, desc, author, category });
    this.service.savePost({ title, desc, author, category }).subscribe(post => {
      alert("Post:" + post.id);
      this.router.navigate(["/posts"]);
    });
  }
}

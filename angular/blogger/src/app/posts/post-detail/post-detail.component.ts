import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../posts.service";
import { Post } from "../post.interface";

@Component({
  selector: "sb-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  id;
  queryParams;
  post: Post;
  constructor(private route: ActivatedRoute, private service: PostsService) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.queryParams = this.route.snapshot.queryParams;
  }

  ngOnInit() {
    this.service.getPost(this.id).subscribe(post => {
      this.post = post;
    });
  }
}

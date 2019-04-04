import { Component, OnInit } from "@angular/core";
import { Post } from "../post.interface";
import { PostsService } from "../posts.service";

@Component({
  selector: "sb-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = [];
  favoriteList: string[] = [];
  //postsService;
  constructor(private service: PostsService) {
    //this.postsService = new PostsService();
  }

  ngOnInit() {
    let postsObservable = this.service.getPosts();
    let onSuccess = posts => {
      this.posts = posts;
    };
    postsObservable.subscribe(onSuccess);
  }

  handleFav(title: string) {
    let index = this.posts.findIndex(p => p.title === title);
    if (this.posts[index].isFavorite === true) {
      this.posts[index].isFavorite = false;
    } else {
      this.posts[index].isFavorite = true;
    }
    this.favoriteList = this.posts
      .filter(p => p.isFavorite === true)
      .map(p => p.title);
  }
}

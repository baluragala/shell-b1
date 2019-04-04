import { Injectable } from "@angular/core";
import { Post } from "./post.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/posts");
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>("http://localhost:3000/posts", post, {
      headers: {
        "X-Token": "2w3sdf6345"
      },
      params: {
        cid: " hello "
      }
    });
  }
}

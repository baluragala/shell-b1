import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { GithubUser } from "./github-user";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<GithubUser>> {
    return this.http.get<Array<GithubUser>>("https://api.github.com/users");
  }
}

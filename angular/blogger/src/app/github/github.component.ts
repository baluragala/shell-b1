import { Component, OnInit } from "@angular/core";
import { GithubService } from "../github.service";
import { Observable } from "rxjs";
import { GithubUser } from "../github-user";

@Component({
  selector: "sb-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  users: Observable<Array<GithubUser>>;
  constructor(private github: GithubService) {}

  ngOnInit() {
    this.users = this.github.getUsers();
  }
}

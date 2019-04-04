import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { PostsModule } from "./posts/posts.module";
import { FormsModule } from "@angular/forms";
import { PostsService } from "./posts/posts.service";
import { RouterModule, Route, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { ManagePostComponent } from "./posts/manage-post/manage-post.component";
import { PostDetailComponent } from "./posts/post-detail/post-detail.component";
import { GithubComponent } from "./github/github.component";
import { GithubRepoComponent } from "./github-repo/github-repo.component";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "posts/new",
    component: ManagePostComponent
  },
  {
    path: "posts/:id",
    component: PostDetailComponent
  },

  {
    path: "github",
    component: GithubComponent
  },
  {
    path: "github/:user/repo",
    component: GithubRepoComponent
  }
];

@NgModule({
  declarations: [AppComponent, GithubComponent, GithubRepoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SharedModule,
    PostsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { ManagePostComponent } from "./posts/manage-post/manage-post.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "posts/new",
    component: ManagePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

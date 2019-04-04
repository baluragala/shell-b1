import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostListComponent } from "./post-list/post-list.component";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { RatingComponent } from "./rating.component";
import { SharedModule } from "../shared/shared.module";
import { ManagePostComponent } from "./manage-post/manage-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManagePostReactiveComponent } from "./manage-post-reactive/manage-post-reactive.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    RatingComponent,
    ManagePostComponent,
    ManagePostReactiveComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [PostListComponent, ManagePostComponent, ManagePostReactiveComponent]
})
export class PostsModule {}

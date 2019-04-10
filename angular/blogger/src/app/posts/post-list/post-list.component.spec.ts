import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostListComponent } from "./post-list.component";

describe("PostListComponent", () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it("should set fav", () => {
    let component = new PostListComponent(null);
    component.posts = [{ id: 1, title: "post1", author: "a1", desc: "post1" }];
    component.handleFav("post1");
    expect(component.posts[0].isFavorite).toBeTruthy();
  });
});

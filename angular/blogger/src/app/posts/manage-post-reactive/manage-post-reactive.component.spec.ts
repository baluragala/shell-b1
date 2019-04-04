import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostReactiveComponent } from './manage-post-reactive.component';

describe('ManagePostReactiveComponent', () => {
  let component: ManagePostReactiveComponent;
  let fixture: ComponentFixture<ManagePostReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePostReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePostReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

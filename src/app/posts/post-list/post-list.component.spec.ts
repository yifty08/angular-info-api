import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostFormComponent } from '../../posts/post-form/post-form.component';
import { PostDetailComponent } from '../../posts/post-detail/post-detail.component';
import { PostService } from '../../services/post.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostListComponent,
        PostFormComponent,
        PostDetailComponent
      ],
      providers: [
        PostService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

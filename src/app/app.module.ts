import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

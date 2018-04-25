import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts():  void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  // Use postService to add a new post to the db, then add it to the local posts array

  addPost(post: Post) {
    this.postService.addPost(post)
      .subscribe(newPost => {
        this.posts.unshift(newPost);
      });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post)
      .subscribe(deletedId => {
        this.posts = this.posts.filter(p => p._id !== deletedId);
      });
  }
}









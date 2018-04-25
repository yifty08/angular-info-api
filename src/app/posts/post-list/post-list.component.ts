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
    this.posts = this.postService.getPosts();
  }

  addPost(post: Post) {
    // console.log('addPost', post);
    this.posts.unshift(post);
  }

  deletePost(post: Post) {
    const indexToDelete = this.posts.indexOf(post);
    if (indexToDelete !== -1) {
      this.posts.splice(indexToDelete, 1);
    }
  }
}

import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable()
export class PostService {

  constructor() { }

  getPosts (): Post[] {
    return [
      new Post(
        'How would you display a property of a component class (say, description) in its html template?',
        'Put the property in curly braces: {{description}}'
      ),
      new Post(
        'What does a decorator like @Component do?',
        'Adds functionality to whatever it is decorating (in this case, a class) without requiring any code change to that thing'
      ),
      new Post(
        'What file determines the modules needed for an app?',
        'package.json'
      )
    ];
  }

}
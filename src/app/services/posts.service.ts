import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private api: ApiService) 
  { }

  getAllPosts() {
    return this.api.get<Post[]>('posts');
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/store';
import { postsWithUserSelector } from 'src/app/store/selectors/combined/post-user';
import { postsSelector } from '../../store/selectors/post/post.selectors';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  //posts$: Observable<Post[]>;
  posts$: any;
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(postsWithUserSelector)

   }

  ngOnInit(): void {
  }

}


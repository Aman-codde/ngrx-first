import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap} from 'rxjs/operators';
import { loadUsers } from '../../actions/user/user.actions';
import { PostsService } from 'src/app/services/posts.service';
import { loadPostsSuccess } from '../../actions/post/post.actions';


@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.postsService.getAllPosts().pipe(
      tap((data) => console.log(data)),
      map(posts => (loadPostsSuccess({data: posts}))),
      catchError(() => {
        console.log('error getting posts')
        return EMPTY
      })
    ))
  ))


  constructor(private actions$: Actions, private postsService: PostsService ) {}

}

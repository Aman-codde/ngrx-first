import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store';
import { loadUsers, loadUsersSuccess } from './store/actions/user/user.actions';
import { userUsersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-angular1';
  users$: Observable<User[]> | undefined;

  constructor( private store: Store<AppState>) {
    // this.store.dispatch(loadUsersSuccess({data: [{id: 3, name: 'Minni'}]}))
    this.store.dispatch(loadUsers());
    this.store.select(userUsersSelector)
  }
}

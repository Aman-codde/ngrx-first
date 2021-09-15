import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store';
import { loadUsers } from 'src/app/store/actions/user/user.actions';
import { userUsersSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor( private store: Store<AppState>) {
    // this.store.dispatch(loadUsersSuccess({data: [{id: 3, name: 'Minni'}]}))
    this.store.dispatch(loadUsers());
    
    this.users$ = this.store.select(userUsersSelector)
  }

  ngOnInit(): void {
  }

}

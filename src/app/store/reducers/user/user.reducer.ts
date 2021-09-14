import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loadUsersSuccess, selectUser } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: User[];
  selectedUser: null| User,
  someNumber: null| number
};

export const initialState: State = {
  users:[],
  selectedUser: null,
  someNumber: null
};


export const reducer = createReducer<State>(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return {...state, users: action.data}
  }),

  on(selectUser, (state,action) => {
     return {...state, selectedUser: action.data}
   }),

  // on(favoriteNumber,(state,action)=> {
  //   return {...state, someNumber: action.data}
  // })
);




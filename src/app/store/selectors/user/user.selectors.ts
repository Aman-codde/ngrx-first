import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersService } from 'src/app/services/users.service';
import {AppState} from '../..';
import * as userFeature from '../../reducers/user/user.reducer';

export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>(userFeature.userFeatureKey);

export const usersSelector = createSelector(
  userFeatureSelector,(userState) => userState.users
);
 
export const userUsersSelector = createSelector(
  userFeatureSelector,
  (state) => state.users
);
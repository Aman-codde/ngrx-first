import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './store/reducers/user/user.reducer';
import * as fromPost from './store/reducers/post/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user/user.effects';
import {HttpClientModule} from '@angular/common/http';
import { PostEffects } from './store/effects/post/post.effects';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UsersListComponent } from './components/users-list/users-list.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
    EffectsModule.forRoot([UserEffects, PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

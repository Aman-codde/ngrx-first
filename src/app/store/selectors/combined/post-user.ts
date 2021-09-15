import { createSelector } from "@ngrx/store";
import { usersSelector } from "../user/user.selectors";
import { postsSelector } from "../post/post.selectors";

export const postsWithUserSelector = createSelector(
    usersSelector,
    postsSelector,
    (users, posts) => {
        return posts.map( post => {
            return {...post, user: users.find( user => user.id === post.userId)}
        })
    }
)
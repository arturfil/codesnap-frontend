import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS, GET_SINGLE_POST, GET_SINGLE_POST_ERROR, GET_SINGLE_POST_SUCCESS } from "../types/postTypes"
import { GetPostActionTypes } from "../action-types/postsActionTypes"
import postsApi from "../../api/Api"
import { Post } from "../../interfaces/Post"

// Get all Posts
export const getPostsAction = (): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    // changing the state to fetching posts
    dispatch({
      type: GET_POSTS
    })
    try {
      const res = await postsApi.get('/posts');
      // if success, change state to success plus the data response
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      // if error change state to error message
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.message
      });
    }
  }
}  

// Get Single Post
export const getSinglePostAction = (id: string): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    dispatch({
      type: GET_SINGLE_POST,
    });
    try {
      const res = await postsApi.get<Post>(`/posts/${id}`);
      dispatch({type: GET_SINGLE_POST_SUCCESS, payload: res.data})
    } catch (error) {
      dispatch({
        type: GET_SINGLE_POST_ERROR,
        payload: error.message
      })
    }
  }
}

// Update Post
export const updatePostAction = (post: Post): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    
  }
}

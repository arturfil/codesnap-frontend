import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { CREATE_POST, CREATE_POST_ERROR, CREATE_POST_SUCCESS, DELETE_POST, DELETE_POST_ERROR, DELETE_POST_SUCCESS, GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS, GET_SINGLE_POST, GET_SINGLE_POST_ERROR, GET_SINGLE_POST_SUCCESS, UPDATE_POST, UPDATE_POST_ERROR, UPDATE_POST_SUCCESS } from "../types/postTypes"
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
      dispatch({type: GET_POSTS_SUCCESS, payload: res.data})
    } catch (error) {
      // if error change state to error message
      dispatch({type: GET_POSTS_ERROR, payload: error.message});
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
      dispatch({type: GET_SINGLE_POST_SUCCESS, payload: res.data});
    } catch (error) {
      dispatch({type: GET_SINGLE_POST_ERROR, payload: error.message})
    }
  }
}

// POST Post
export const createPostAction = (post: Post): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    dispatch({type: CREATE_POST})
    try {
      const res = await postsApi.post<Post>(`/posts/`, post);
      dispatch({type: CREATE_POST_SUCCESS, payload: res.data});
    } catch (error) {
      dispatch({type: CREATE_POST_ERROR, payload: error.message});       
    }
  }
}

// Update Post
export const updatePostAction = (post: Post): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    dispatch({
      type: UPDATE_POST,
    });
    try {
      const res = await postsApi.put<Post>(`/posts/${post.id}`, post);
      dispatch({type: UPDATE_POST_SUCCESS, payload: res.data});
    } catch (error) {
      dispatch({type: UPDATE_POST_ERROR, payload: error.message});      
    }
  }
}

// DELETE Post
export const deletePostAction = (id: string): ThunkAction<void, RootState, null, GetPostActionTypes> => {
  return async dispatch => {
    dispatch({
      type: DELETE_POST,
    });
    try {
      const res = await postsApi.delete<string>(`posts/${id}`);
      dispatch({type: DELETE_POST_SUCCESS, payload: id});
    } catch (error) {
      dispatch({type: DELETE_POST_ERROR, payload: error.message});
    }
  }
}
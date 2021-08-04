import { Post } from "../../interfaces/Post";
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../action-types/postTypes";
import { SET_ERROR, SET_LOADING } from "../action-types/sharedTypes";

export interface GetPosts {
  type: typeof GET_POSTS;
}

interface GetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS;
  payload: Post[];
}

interface GetPostsError {
  type: typeof GET_POSTS_ERROR;
  payload: true;
}

export type PostActionTypes = GetPosts | GetPostsSuccess | GetPostsError;

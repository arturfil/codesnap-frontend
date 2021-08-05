import { Post } from "../../interfaces/Post";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_SINGLE_POST,
  GET_SINGLE_POST_ERROR,
  GET_SINGLE_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
} from "../types/postTypes";

// TODO: Check if it would be better to separate this into two files later on
// get posts action types
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

// single post action types
interface GetSinglePost {
  type: typeof GET_SINGLE_POST;
}

interface GetSinglePostSuccess {
  type: typeof GET_SINGLE_POST_SUCCESS;
  payload: Post;
}

interface GetSinglePostError {
  type: typeof GET_SINGLE_POST_ERROR;
  payload: true;
}

interface UpdatePost {
  type: typeof UPDATE_POST;
}

interface UpdatePostSuccess {
  type: typeof UPDATE_POST_SUCCESS;
  payload: Post
}

interface UpdatePostError {
  type: typeof UPDATE_POST_ERROR;
  payload: true;
}

export type GetPostActionTypes =
  | GetPosts
  | GetPostsSuccess
  | GetPostsError
  | GetSinglePost
  | GetSinglePostSuccess
  | GetSinglePostError
  | UpdatePost
  | UpdatePostSuccess
  | UpdatePostError;

import { Post } from "../../interfaces/Post";
import {
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
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


// GET posts action types
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


// GET/:id
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


// PUT/:id
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


// POST/:id
interface CreatePost {
  type: typeof CREATE_POST
}

interface CreatePostSuccess {
  type: typeof CREATE_POST_SUCCESS,
  payload: Post
}

interface CreatePostError {
  type: typeof CREATE_POST_ERROR,
  payload: true
}


// DELETE/:id
interface DeletePost {
  type: typeof DELETE_POST
}

interface DeletePostSuccess {
  type: typeof DELETE_POST_SUCCESS,
  payload: string
}

interface DeletePostError {
  type: typeof DELETE_POST_ERROR,
  payload: true
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
  | UpdatePostError
  | CreatePost
  | CreatePostSuccess
  | CreatePostError
  | DeletePost
  | DeletePostSuccess
  | DeletePostError

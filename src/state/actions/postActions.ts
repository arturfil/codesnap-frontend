import { Post } from "../../interfaces/Post";
import { GET_POSTS, GET_SINGLE_POST } from "../action-types/postTypes";
import { SET_ERROR, SET_LOADING } from "../action-types/sharedTypes";

interface SetErrorAction {
  type: typeof SET_ERROR;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: Post[];
}

interface GetSinglePostAction {
  type: typeof GET_SINGLE_POST;
  payload: Post[];
}

export type PostAction = GetPostsAction | SetErrorAction | GetSinglePostAction;

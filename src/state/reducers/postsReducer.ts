import { postsDataState, Post } from "../../interfaces/Post";
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../action-types/postTypes";
import { PostActionTypes } from "../actions/postsActionTypes";

const initialState: postsDataState = {
  data: [],
  loading: false,
  error: false,
  postToEdit: {} as Post,
  postToDelete: {} as Post
}

const postsReducer = (state = initialState, action: PostActionTypes): postsDataState  => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default postsReducer;
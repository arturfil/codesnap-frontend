import { PostsResponse, SinglePostResponse } from "../../interfaces/Post";
import { GET_POSTS, GET_SINGLE_POST } from "../action-types/postTypes";
import { SET_ERROR, SET_LOADING } from "../action-types/sharedTypes";
import { PostAction } from "../actions/postActions";

const initialState: PostsResponse = {
  data: null,
  loading: false,
  error: ''
}

const postsReducer = (state = initialState, action: PostAction): PostsResponse  => {
  switch(action.type) {
    case GET_POSTS:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case GET_SINGLE_POST:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    // case SET_ERROR: TODO: create setError Actiona
    //     error: action.paylod
    default:
      return state;
  }
}

export default postsReducer;
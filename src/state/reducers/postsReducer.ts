import { postsDataState, Post } from "../../interfaces/Post";
import { CREATE_POST, CREATE_POST_SUCCESS, DELETE_POST, DELETE_POST_SUCCESS, GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS, GET_SINGLE_POST, GET_SINGLE_POST_SUCCESS, UPDATE_POST, UPDATE_POST_SUCCESS } from '../types/postTypes'
import { GetPostActionTypes } from "../action-types/postsActionTypes";

const initialState: postsDataState = {
  data: [],
  loading: false,
  error: false,
  singlePost: {} as Post,
  postToDelete: {} as Post
}

const postsReducer = (state = initialState, action: GetPostActionTypes): postsDataState  => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        error: false,
        data: [],
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
    case CREATE_POST:
    case UPDATE_POST:
    case GET_SINGLE_POST:
    case DELETE_POST:
      return {
        ...state,
        loading: true,
      }
    case GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePost: action.payload
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      }
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        data: state.data.map(p => p.id === action.payload.id ? (p = action.payload) : p)
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        data: state.data.filter(p => p.id !== action.payload)
      }
    default:
      return state;
  }
}

export default postsReducer;
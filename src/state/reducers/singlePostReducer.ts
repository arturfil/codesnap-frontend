import { title } from "process";
import { Post } from "../../interfaces/Post";
import { GET_SINGLE_POST } from "../action-types/postTypes";
import { PostAction } from "../actions/postActions";

interface SinglePostResponse {
  post: Post | null,
  loading: boolean,
  error: ''
}

const initialState: SinglePostResponse = {
  post: null,
  loading: false,
  error: ''
};

const singlePostReducer = (state = initialState, action: PostAction): SinglePostResponse => {
  switch (action.type) {
    case GET_SINGLE_POST:
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    // ERROR
    default:
      return state;
  }
};


export default singlePostReducer;
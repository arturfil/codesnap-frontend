import { ThunkAction } from "redux-thunk"
import { RootState } from ".."
import { Forecast } from "../../interfaces/Forecast"
import { Post } from "../../interfaces/Post"
import { GET_POSTS, GET_SINGLE_POST } from "../action-types/postTypes"
import { GET_FORECASTS } from "../action-types/forecastTypes"
import { SET_ERROR } from "../action-types/sharedTypes"
import { PostAction } from "../actions/postActions"
import { ForecastAction } from "../actions/forecastActions"

export const getForecasts = (): ThunkAction<void, RootState, null, ForecastAction> => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:5000/weatherforecast');
      const forecasts: Forecast[] = await res.json();
      dispatch({
        type: GET_FORECASTS,
        payload: forecasts
      })
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      })
    }
  }
}

export const getPots = (): ThunkAction<void, RootState, null, PostAction> => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:5000/api/posts');
      const posts: Post[] = await res.json();
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      });
    }
  }
}

export const getSinglePost = (id: string): ThunkAction<void, RootState, null, PostAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const post: Post[] = await res.json();
      // post = post[0];
      dispatch({
        type: GET_SINGLE_POST,
        payload: post
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.messasge
      })
    }
  }
}


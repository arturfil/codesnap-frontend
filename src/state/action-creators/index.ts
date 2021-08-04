import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { Forecast } from "../../interfaces/Forecast"
import { Post } from "../../interfaces/Post"
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../action-types/postTypes"
import { GET_FORECASTS } from "../action-types/forecastTypes"
import { SET_ERROR } from "../action-types/sharedTypes"
import { ForecastAction } from "../actions/forecastActions"
import { GetPosts, PostActionTypes } from "../actions/postsActionTypes"

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

export const getPotsAction = (): ThunkAction<void, RootState, null, PostActionTypes> => {
  return async dispatch => {
    dispatch({
      type: GET_POSTS
    })
    try {
      const res = await fetch('http://localhost:5000/api/posts');
      const posts: Post[] = await res.json();
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: posts
      })
    } catch (error) {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.message
      });
    }
  }
}


const getPosts = () => ({
  type: GET_POSTS
})
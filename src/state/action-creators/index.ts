import axios from "axios"
import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from ".."
import { Forecast } from "../../interfaces/Forecast"
import { GET_FORECASTS, SET_ERROR } from "../action-types"
import { ForecastAction } from "../actions"

export const getForecasts = (): ThunkAction<void, RootState, null, ForecastAction> => {
  return async dispatch => {
    try {
      const headers = {'Content-Type': 'application/json'};
      const res = await fetch('http://localhost:5000/weatherforecast'); //, {headers});
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


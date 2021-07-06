import { Forecast } from "../../interfaces/Forecast";
import { GET_FORECASTS, SET_ERROR, SET_LOADING } from "../action-types";

interface GetForecastAction {
  type: typeof GET_FORECASTS,
  payload: Forecast[]
}

interface SetLoadingAction {
  type: typeof SET_LOADING
}

interface SetErrorAction {
  type: typeof SET_ERROR
}

export type ForecastAction = GetForecastAction | SetLoadingAction | SetErrorAction;

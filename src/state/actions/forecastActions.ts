import { Forecast } from "../../interfaces/Forecast";
import { GET_FORECASTS } from '../action-types/forecastTypes'
import { SET_LOADING, SET_ERROR } from '../action-types/sharedTypes'

interface GetForecastAction {
  type: typeof GET_FORECASTS;
  payload: Forecast[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
}


export type ForecastAction =
  | GetForecastAction
  | SetLoadingAction
  | SetErrorAction;


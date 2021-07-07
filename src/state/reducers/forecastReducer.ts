import { ForecastState } from "../../interfaces/ForecastState";
import { GET_FORECASTS } from "../action-types";
import { ForecastAction } from "../actions";

const initialState: ForecastState = {
  forecasts: null,
  loading: false,
  error: ''
}

const forecastReducer = (state = initialState, action: ForecastAction): ForecastState => {
  switch(action.type) {
    case GET_FORECASTS:
      return {
        forecasts: action.payload,
        loading: false,
        error: ''
      }
    default:
      return state
  }
}


export default forecastReducer;
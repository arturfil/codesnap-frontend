import { Forecast } from "./Forecast";

export interface ForecastState {
  forecasts: Forecast[] | null;
  loading: boolean;
  error: string;
}
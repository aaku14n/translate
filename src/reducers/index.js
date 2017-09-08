import { combineReducers } from "redux";
import EnglishText from "./english-reducers";
import StateFetch from "./state-fetch";
import WeatherFetch from "./weather-fetch";
import CoorFetch from "./coor-fetch";
import DistFetch from "./dist-fetch";
import TempFetch from "./temp-fetch";
import WindFetch from "./wind-fetch";
import LastMonthFetch from "./last-month-fetch";
import CurrentMonthFetch from "./current-month-fetch";
import NextMonthFetch from "./next-month-fetch";

const allReducers = combineReducers({
  EnglishText,
  StateFetch,
  DistFetch,
  WeatherFetch,
  CoorFetch,
  TempFetch,
  WindFetch,
  LastMonthFetch,
  CurrentMonthFetch,
  NextMonthFetch
});
export default allReducers;

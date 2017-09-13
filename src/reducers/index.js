import { combineReducers } from "redux";
import pincode from "./pincode-save";
import area from "./state-fetch";
import weather from "./weather-fetch";
import country from "./dist-fetch";
import temp from "./temp-fetch";
import wind from "./wind-fetch";
import lastMonth from "./last-month-fetch";
import currentMonth from "./current-month-fetch";
import nextMonth from "./next-month-fetch";

const allReducers = combineReducers({
  pincode,
  area,
  country,
  weather,
  temp,
  wind,
  lastMonth,
  currentMonth,
  nextMonth
});
export default allReducers;

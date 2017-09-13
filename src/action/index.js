import axios from "axios";
import {
  SAVE_PINCODE_FAILURE,
  SAVE_PINCODE_SUCCESS,
  SAVE_PINCODE_REQUEST,
  FETCH_STATE_REQUEST,
  FETCH_STATE_SUCCESS,
  FETCH_STATE_FAILURE,
  FETCH_COUNTRY_CODE_REQUEST,
  FETCH_COUNTRY_CODE_SUCCESS,
  FETCH_COUNTRY_CODE_FAILURE,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
  FETCH_TEMP_FAILURE,
  FETCH_TEMP_SUCCESS,
  FETCH_TEMP_REQUEST,
  FETCH_WIND_FAILURE,
  FETCH_WIND_SUCCESS,
  FETCH_WIND_REQUEST,
  FETCH_NEXT_MONTH_FAILURE,
  FETCH_NEXT_MONTH_SUCCESS,
  FETCH_NEXT_MONTH_REQUEST,
  FETCH_CURRENT_MONTH_FAILURE,
  FETCH_CURRENT_MONTH_SUCCESS,
  FETCH_CURRENT_MONTH_REQUEST,
  FETCH_LAST_MONTH_FAILURE,
  FETCH_LAST_MONTH_SUCCESS,
  FETCH_LAST_MONTH_REQUEST,
  REQUESTING,
  SUCCESS,
  FAILURE
} from "./config.js";

// **********************************
// Saving pincode  from api request
// **********************************
function savePincodeRequest() {
  return {
    type: SAVE_PINCODE_REQUEST,
    status: REQUESTING
  };
}

function savePincodeSuccess(pincode) {
  return {
    type: SAVE_PINCODE_SUCCESS,
    status: SUCCESS,
    pincode
  };
}

function savePincodeFailure(errorMsg) {
  return {
    type: SAVE_PINCODE_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function savePincode(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(savePincodeRequest());
    try {
      dispatch(savePincodeSuccess(pincode));
    } catch (e) {
      dispatch(savePincodeFailure(e.message));
    }
  };
}

// **********************************
// fetching state from api request
// **********************************
function fetchStateRequest() {
  return {
    type: FETCH_STATE_REQUEST,
    status: REQUESTING
  };
}

function fetchStateSuccess(name) {
  return {
    type: FETCH_STATE_SUCCESS,
    status: SUCCESS,
    name: name
  };
}

function fetchStateFailure(errorMsg) {
  return {
    type: FETCH_STATE_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchStateName(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchStateRequest());
    try {
      const result = await api.get(pincode);
      let city_name = [];
      city_name.push({ Name: result.data.city.name });
      dispatch(fetchStateSuccess(city_name));
    } catch (e) {
      dispatch(fetchStateFailure(e.message));
    }
  };
}

// **********************************
// // fetching Country code from api request
// **********************************
function fetchCountryCodeRequest() {
  return {
    type: FETCH_COUNTRY_CODE_REQUEST,
    status: REQUESTING
  };
}

function fetchCountryCodeSuccess(name) {
  return {
    type: FETCH_COUNTRY_CODE_SUCCESS,
    status: SUCCESS,
    name: name
  };
}

function fetchCountryCodeFailure(errorMsg) {
  return {
    type: FETCH_COUNTRY_CODE_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchCountryCode(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchCountryCodeRequest());
    try {
      const result = await api.get(pincode);
      let city_name = [];
      city_name.push({ Code: result.data.city.country });
      dispatch(fetchCountryCodeSuccess(city_name));
    } catch (e) {
      dispatch(fetchCountryCodeFailure(e.message));
    }
  };
}

// **********************************
// // fetching Country code from api request
// **********************************
function fetchWeatherRequest() {
  return {
    type: FETCH_WEATHER_REQUEST,
    status: REQUESTING
  };
}

function fetchWeatherSuccess(name) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    status: SUCCESS,
    name: name
  };
}

function fetchWeatherFailure(errorMsg) {
  return {
    type: FETCH_WEATHER_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchWeather(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchWeatherRequest());
    try {
      const result = await api.get(pincode);
      let city_name = [];
      city_name.push({ Weather: result.data.list[0].weather[0].description });
      dispatch(fetchWeatherSuccess(city_name));
    } catch (e) {
      dispatch(fetchWeatherFailure(e.message));
    }
  };
}

// **********************************
// // fetching Temp from api request
// **********************************
function fetchTempRequest() {
  return {
    type: FETCH_TEMP_REQUEST,
    status: REQUESTING
  };
}
function fetchTempSuccess(temp) {
  return {
    type: FETCH_TEMP_SUCCESS,
    status: SUCCESS,
    temp: temp
  };
}
function fetchTempFailure(errorMsg) {
  return {
    type: FETCH_TEMP_FAILURE,
    status: FAILURE,
    errorMsg
  };
}
export function fetchTemp(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchTempRequest());
    try {
      let result = await api.get(pincode);
      let city_name = [];
      city_name.push({ Temp: result.data.list[0].main.temp });
      dispatch(fetchTempSuccess(city_name));
    } catch (e) {
      return dispatch(fetchTempFailure(e.message));
    }
  };
}
// **********************************
// // fetching Wind from api request
// **********************************

function fetchWindRequest() {
  return {
    type: FETCH_WIND_REQUEST,
    status: REQUESTING
  };
}
function fetchWindSuccess(wind_status) {
  return {
    type: FETCH_WIND_SUCCESS,
    status: SUCCESS,
    wind_status
  };
}
function fetchWindFailure(errorMsg) {
  return {
    type: FETCH_WIND_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchWind(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchWindRequest());
    try {
      let result = await api.get(pincode);
      let wind_status = [];
      wind_status.push({ deg: result.data.list[0].wind.deg });
      wind_status.push({ speed: result.data.list[0].wind.speed });
      dispatch(fetchWindSuccess(wind_status));
    } catch (e) {
      dispatch(fetchWindFailure(e.message));
    }
  };
}

// **********************************
// // fetching Next Month from api request
// **********************************

function fetchNextMonthRequest() {
  return {
    type: FETCH_NEXT_MONTH_REQUEST,
    status: REQUESTING
  };
}
function fetchNextMonthSuccess(dt_text) {
  return {
    type: FETCH_NEXT_MONTH_SUCCESS,
    status: SUCCESS,
    dt_text
  };
}
function fetchNextMonthFailure(errorMsg) {
  return {
    type: FETCH_NEXT_MONTH_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchNextMonth(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchNextMonthRequest());
    try {
      let result = await api.get(pincode);
      let month_status = [];
      month_status.push({ temp: result.data.list[0].main.temp });
      month_status.push({ temp_min: result.data.list[0].main.temp_min });
      month_status.push({ temp_max: result.data.list[0].main.temp_max });
      month_status.push({ pressure: result.data.list[0].main.pressure });
      month_status.push({ sea_level: result.data.list[0].main.sea_level });
      month_status.push({ humidity: result.data.list[0].main.humidity });
      dispatch(fetchNextMonthSuccess(month_status));
    } catch (e) {
      dispatch(fetchNextMonthFailure(e.message));
    }
  };
}

// **********************************
// // fetching Current Month from api request
// **********************************

function fetchCurrentMonthRequest() {
  return {
    type: FETCH_CURRENT_MONTH_REQUEST,
    status: REQUESTING
  };
}
function fetchCurrentMonthSuccess(dt_text) {
  return {
    type: FETCH_CURRENT_MONTH_SUCCESS,
    status: SUCCESS,
    dt_text
  };
}
function fetchCurrentMonthFailure(errorMsg) {
  return {
    type: FETCH_CURRENT_MONTH_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchCurrentMonth(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchCurrentMonthRequest());
    try {
      let result = await api.get(pincode);
      let month_status = [];
      month_status.push({ temp: result.data.list[4].main.temp });
      month_status.push({ temp_min: result.data.list[4].main.temp_min });
      month_status.push({ temp_max: result.data.list[4].main.temp_max });
      month_status.push({ pressure: result.data.list[4].main.pressure });
      month_status.push({ sea_level: result.data.list[4].main.sea_level });
      month_status.push({ humidity: result.data.list[4].main.humidity });
      dispatch(fetchCurrentMonthSuccess(month_status));
    } catch (e) {
      dispatch(fetchCurrentMonthFailure(e.message));
    }
  };
}

// **********************************
// // fetching Current Month from api request
// **********************************

function fetchLastMonthRequest() {
  return {
    type: FETCH_LAST_MONTH_REQUEST,
    status: REQUESTING
  };
}
function fetchLastMonthSuccess(dt_text) {
  return {
    type: FETCH_LAST_MONTH_SUCCESS,
    status: SUCCESS,
    dt_text
  };
}
function fetchLastMonthFailure(errorMsg) {
  return {
    type: FETCH_LAST_MONTH_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchLastMonth(pincode) {
  return async (dispatch, getState, api) => {
    dispatch(fetchLastMonthRequest());
    try {
      let result = await api.get(pincode);
      let month_status = [];
      month_status.push({ temp: result.data.list[14].main.temp });
      month_status.push({ temp_min: result.data.list[14].main.temp_min });
      month_status.push({ temp_max: result.data.list[14].main.temp_max });
      month_status.push({ pressure: result.data.list[14].main.pressure });
      month_status.push({ sea_level: result.data.list[14].main.sea_level });
      month_status.push({ humidity: result.data.list[14].main.humidity });
      dispatch(fetchLastMonthSuccess(month_status));
    } catch (e) {
      dispatch(fetchLastMonthFailure(e.message));
    }
  };
}

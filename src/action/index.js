import axios from "axios";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const REQUESTING = "REQUESTING";

export const FETCH_STATE_REQUEST = "FETCH_COUNTRY_REQUEST";
export const FETCH_STATE_SUCCESS = "FETCH_STATE_SUCCESS";
export const FETCH_STATE_FAILURE = "FETCH_STATE_FAILURE";

export function fetchStateRequest() {
  return {
    type: FETCH_STATE_REQUEST,
    status: REQUESTING
  };
}

export function fetchStateSuccess(name) {
  return {
    type: FETCH_STATE_SUCCESS,
    status: SUCCESS,
    name
  };
}

export function fetchStateFailure(errorMsg) {
  return {
    type: FETCH_STATE_FAILURE,
    status: FAILURE,
    errorMsg
  };
}

export function fetchStateName(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return async (dispatch, getState, api) => {
    console.log(api);
    dispatch(fetchStateRequest());
    try {
      const result = await api.get(url);
      dispatch(fetchStateSuccess(result.data.city.name));
    } catch (e) {
      dispatch(fetchStateFailure(e.message));
    }
  };
}

export const EnglishAction = word => {
  return {
    type: "ENGLISH_TRANSLATE",
    payload: word.target.value
  };
};

export function stateFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "STATE_FETCH", name: response.data.city.name });
      })
      .catch(err => {
        dispatch({ type: "STATE_FETCH", error: err });
      });
  };
}
export function distFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "DIST_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "DIST_FETCH", payload: err });
      });
  };
}
export function WeatherFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "WEATHER_FETCH", status: response.payload });
      })
      .catch(err => {
        dispatch({ type: "WEATHER_FETCH", payload: err });
      });
  };
}
export function CoordinateFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "COOR_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "COOR_FETCH", payload: err });
      });
  };
}
export function TempFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "TEMP_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "TEMP_FETCH", payload: err });
      });
  };
}
export function WindFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "WIND_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "WIND_FETCH", payload: err });
      });
  };
}
export function NextMonthFetchFunction(pincode) {
  console.log("dsafsdf", pincode);
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "NEXT_MONTH_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "NEXT_MONTH_FETCH", payload: err });
      });
  };
}
export function CurrentMonthFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: "CURRENT_MONTH_FETCH",
          payload: response
        });
      })
      .catch(err => {
        dispatch({ type: "CURRENT_MONTH_FETCH", payload: err });
      });
  };
}
export function LastMonthFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "LAST_MONTH_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "LAST_MONTH_FETCH", payload: err });
      });
  };
}

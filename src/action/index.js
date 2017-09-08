import axios from "axios";
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
        dispatch({ type: "STATE_FETCH", payload: response });
      })
      .catch(err => {
        dispatch({ type: "STATE_FETCH", payload: err });
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
        dispatch({ type: "DIST_FETCH", payload: response.data.city });
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
        dispatch({ type: "WEATHER_FETCH", payload: response.data });
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
        dispatch({ type: "COOR_FETCH", payload: response.data });
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
        dispatch({ type: "TEMP_FETCH", payload: response.data });
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
        dispatch({ type: "WIND_FETCH", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "WIND_FETCH", payload: err });
      });
  };
}
export function NextMonthFetchFunction(pincode) {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    pincode +
    ",uk&appid=828a7f789fa0d9c17339483615f573da";
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "NEXT_MONTH_FETCH", payload: response.data.list[0] });
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
        dispatch({ type: "CURRENT_MONTH_FETCH", payload: response.data.list[20] });
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
        dispatch({ type: "LAST_MONTH_FETCH", payload: response.data.list[23] });
      })
      .catch(err => {
        dispatch({ type: "LAST_MONTH_FETCH", payload: err });
      });
  };
}

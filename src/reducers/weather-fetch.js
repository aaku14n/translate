import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from "../action/config";

const weather = (state = { name: null, status: null, error: null }, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        name: action.name,
        status: action.status
      });
    case FETCH_WEATHER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.errorMsg
      });
    case FETCH_WEATHER_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
};
export default weather;

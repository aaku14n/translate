import {
  FETCH_TEMP_REQUEST,
  FETCH_TEMP_SUCCESS,
  FETCH_TEMP_FAILURE
} from "../action/config";
const temp = (state = { temp: null, status: null, error: null }, action) => {
  switch (action.type) {
    case FETCH_TEMP_SUCCESS:
      return Object.assign({}, state, {
        temp: action.temp,
        status: action.status
      });
    case FETCH_TEMP_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.errorMsg
      });
    case FETCH_TEMP_REQUEST:
      return Object.assign({}, state, { status: action.status });
    default:
      return state;
  }
};
export default temp;

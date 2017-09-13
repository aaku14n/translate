import {
  FETCH_WIND_REQUEST,
  FETCH_WIND_SUCCESS,
  FETCH_WIND_FAILURE
} from "../action/config";
const wind = (
  state = { wind_status: null, status: null, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_WIND_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    case FETCH_WIND_SUCCESS:
      return Object.assign({}, state, {
        wind_status: action.wind_status,
        status: action.status
      });
    case FETCH_WIND_FAILURE:
      return Object.assign({}, state, {
        error: action.errormsg
      });
    default:
      return state;
  }
};
export default wind;

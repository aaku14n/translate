import {
  FETCH_COUNTRY_CODE_REQUEST,
  FETCH_COUNTRY_CODE_SUCCESS,
  FETCH_COUNTRY_CODE_FAILURE
} from "../action/config";

const country = (state = { name: null, status: null, error: null }, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_CODE_SUCCESS: {
      return Object.assign({}, state, {
        name: action.name,
        status: action.status
      });
    }
    case FETCH_COUNTRY_CODE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.errorMsg
      });
    case FETCH_COUNTRY_CODE_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
};

export default country;

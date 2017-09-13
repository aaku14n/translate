import {
  FETCH_STATE_REQUEST,
  FETCH_STATE_SUCCESS,
  FETCH_STATE_FAILURE
} from "../action/config";

const area = (state = { name: null, status: null, error: null }, action) => {
  switch (action.type) {
    case FETCH_STATE_SUCCESS:
      return Object.assign({}, state, {
        name: action.name,
        status: action.status
      });
    case FETCH_STATE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.errorMsg
      });
    case FETCH_STATE_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
};

export default area;

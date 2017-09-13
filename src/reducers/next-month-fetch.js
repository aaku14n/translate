import {
  FETCH_NEXT_MONTH_REQUEST,
  FETCH_NEXT_MONTH_SUCCESS,
  FETCH_NEXT_MONTH_FAILURE
} from "../action/config";

const nextMonth = (
  state = { dt_text: null, status: null, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_NEXT_MONTH_SUCCESS:
      return Object.assign({}, state, {
        dt_text: action.dt_text,
        status: action.status
      });
    case FETCH_NEXT_MONTH_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    case FETCH_NEXT_MONTH_FAILURE:
      return Object.assign({}, state, {
        error: action.errorMsg
      });
    default:
      return state;
  }
};
export default nextMonth;

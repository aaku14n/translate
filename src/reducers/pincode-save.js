import { SAVE_PINCODE_SUCCESS } from "../action/config";
const pincode = (state = { pincode: null, status: null }, action) => {
  switch (action.type) {
    case SAVE_PINCODE_SUCCESS:
      return Object.assign({}, state, { pincode: action.pincode });
    default:
      return state;
  }
};
export default pincode;

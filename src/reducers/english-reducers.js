const pincode = (state = { pincode: null }, action) => {
  switch (action.type) {
    case "ENGLISH_TRANSLATE": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default pincode;

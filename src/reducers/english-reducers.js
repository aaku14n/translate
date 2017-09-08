export default function(state = null, action) {
  switch (action.type) {
    case "ENGLISH_TRANSLATE": {
      return action.payload;
    }
    default:
      return state;
  }
}

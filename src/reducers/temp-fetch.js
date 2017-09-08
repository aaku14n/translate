export default function(state = null, action) {
  switch (action.type) {
    case "TEMP_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

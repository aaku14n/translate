export default function(state = null, action) {
  switch (action.type) {
    case "WIND_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

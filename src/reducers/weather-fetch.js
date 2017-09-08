export default function(state = null, action) {
  switch (action.type) {
    case "WEATHER_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

export default function(state = null, action) {
  switch (action.type) {
    case "STATE_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

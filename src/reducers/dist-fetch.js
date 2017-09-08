export default function(state = null, action) {
  switch (action.type) {
    case "DIST_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

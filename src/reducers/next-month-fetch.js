export default function(state = null, action) {
  switch (action.type) {
    case "NEXT_MONTH_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

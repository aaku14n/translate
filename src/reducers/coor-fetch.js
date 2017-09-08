export default function(state = null, action) {
  switch (action.type) {
    case "COOR_FETCH": {
      return action.payload;
    }
    default:
      return state;
  }
}

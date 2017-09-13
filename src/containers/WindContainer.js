import { connect } from "react-redux";
import { fetchWind } from "../action/index";
import TranslateListItem from "../components/TranslateListItem.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchWind(pincode));
    }
  };
};
const mapStateToProps = state => {
  return {
    header: "Wind Status",
    pincode: state.pincode.pincode,
    subheader: state.wind.wind_status
  };
};

const WindContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);
export default WindContainer;

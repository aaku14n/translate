// container
import { connect } from "react-redux";
import { fetchStateName } from "../action/index.js";
import TranslateListItem from "../components/TranslateListItem.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchStateName(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Area Name",
    pincode: state.pincode.pincode,
    subheader: state.area.name
  };
};

const AreaNameContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);

export default AreaNameContainer;

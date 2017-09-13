import { connect } from "react-redux";
import { fetchTemp } from "../action/index";
import TransalteListItem from "../components/TranslateListItem";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchTemp(pincode));
    }
  };
};
const mapStateToProps = state => {
  return {
    header: "Tempreture",
    pincode: state.pincode.pincode,
    subheader: state.temp.temp
  };
};

const TempContainer = connect(mapStateToProps, mapDispatchToProps)(
  TransalteListItem
);
export default TempContainer;

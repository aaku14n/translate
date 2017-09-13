import { connect } from "react-redux";
import { fetchCurrentMonth } from "../action/index";
import TranslateListItem from "../components/TranslateListItem";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchCurrentMonth(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Current  Month",
    pincode: state.pincode.pincode,
    subheader: state.currentMonth.dt_text
  };
};

const CurrentMonthContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);
export default CurrentMonthContainer;

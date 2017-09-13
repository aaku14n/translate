import { connect } from "react-redux";
import { fetchLastMonth } from "../action/index";
import TranslateListItem from "../components/TranslateListItem";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchLastMonth(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Last Month",
    pincode: state.pincode.pincode,
    subheader: state.lastMonth.dt_text
  };
};

const LastMonthContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);
export default LastMonthContainer;

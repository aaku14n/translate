import { connect } from "react-redux";
import { fetchNextMonth } from "../action/index";
import TranslateListItem from "../components/TranslateListItem";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchNextMonth(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Next  Month",
    pincode: state.pincode.pincode,
    subheader: state.nextMonth.dt_text
  };
};

const NextMonthContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);
export default NextMonthContainer;

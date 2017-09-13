// container
import { connect } from "react-redux";
import { fetchCountryCode } from "../action/index.js";
import TranslateListItem from "../components/TranslateListItem.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchCountryCode(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Country Code",
    pincode: state.pincode.pincode,
    subheader: state.country.name
  };
};

const CountryCodeContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);

export default CountryCodeContainer;

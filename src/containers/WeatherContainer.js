import { connect } from "react-redux";
import TranslateListItem from "../components/TranslateListItem.js";
import { fetchWeather } from "../action/index.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(fetchWeather(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Weather Status",
    pincode: state.pincode.pincode,
    subheader: state.weather.name
  };
};

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);

export default WeatherContainer;

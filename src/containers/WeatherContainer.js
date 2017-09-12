import { connect } from "react-redux";
import { stateFetchFunction } from "../action/index.js";
import TranslateListItem from "../components/TranslateListItem.js";
import { WeatherFetchFunction } from "../action/index.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(WeatherFetchFunction(pincode));
    }
  };
};

const mapStateToProps = state => {
  return {
    header: "Area Name",
    subheader: area.weather.status
  };
};

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);

export default class WeatherContainer;

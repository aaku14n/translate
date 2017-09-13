import React from "react";
import Searchbar from "./search-bar";

import TranslateListItem from "./TranslateListItem.js";
import AreaNameContainer from "../containers/AreaNameContainer.js";
import SearchBarContainer from "../containers/SearchBarContainer";
import CountryCodeContainer from "../containers/CountryCodeContainer";
import WeatherContainer from "../containers/WeatherContainer";
import TempContainer from "../containers/TempContainer";
import WindContainer from "../containers/WindContainer";
import NextMonthContainer from "../containers/NextMonthContainer";
import CurrentMonthContainer from "../containers/CurrentMonthContainer";
import LastMonthContainer from "../containers/LastMonthContainer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="SearchBar-Container">
          <SearchBarContainer />
        </div>
        <div className="row">
          <AreaNameContainer />
          <CountryCodeContainer />
          <WeatherContainer />
          <TempContainer />
        </div>
        <div className="row">
          <WindContainer />
          <NextMonthContainer />
          <CurrentMonthContainer />
          <LastMonthContainer />
        </div>
      </div>
    );
  }
}

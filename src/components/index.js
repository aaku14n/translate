import React from "react";
import Searchbar from "./search-bar";
import TranslateList from "./translate-list";
import "../css/bootstrap.min.css";
import "../css/Home.css";
import TranslateListItem from "./TranslateListItem.js";
import AreaNameContainer from "../containers/AreaNameContainer.js";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Container-fluid">
        <AreaNameContainer />
        {/*<Searchbar />
        <TranslateList />*/}
      </div>
    );
  }
}

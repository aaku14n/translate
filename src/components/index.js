import React from "react";
import Searchbar from "./search-bar";
import TranslateList from "./translate-list";
import "../css/bootstrap.min.css";
import "../css/Home.css";
export default class Home extends React.Component {
  render() {
    return (
      <div className="Container-fluid">
        <Searchbar />
        <TranslateList />
      </div>
    );
  }
}

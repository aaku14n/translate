import React from "react";
import { EnglishAction } from "../action/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
export default class Searchbar extends React.Component {
  handleClick(e) {
    this.props.onClick(e.target.value);
  }
  render() {
    return (
      <div className="SearchBar-Box">
        <input
          type="text"
          className="Searchbar"
          placeholder="Please Enter City Here for weather status..."
          onChange={e => this.handleClick(e)}
        />
      </div>
    );
  }
}
// onChange={e => this.props.EnglishAction(e)}

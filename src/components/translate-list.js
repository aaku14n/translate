import React from "react";
import TranslateListItem from "./translate-list-item";
import { connect } from "react-redux";
class TranslateList extends React.Component {
  render() {
    return (
      <div className="container box-data">
        <div className="row">
          <TranslateListItem id="1" />
          <TranslateListItem id="2" />
          <TranslateListItem id="3" />
          <TranslateListItem id="4" />
        </div>
        <div className="row">
          <TranslateListItem id="5" />
          <TranslateListItem id="6" />
          <TranslateListItem id="7" />
          <TranslateListItem id="8" />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    info: state.EnglishAction
  };
}
export default connect(mapStateToProps)(TranslateList);

import React from "react";
import { EnglishAction } from "../action/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Searchbar extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="Searchbar"
          placeholder="Please Enter City Here..."
          onChange={e => this.props.EnglishAction(e)}
        />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      EnglishAction
    },
    dispatch
  );
}
export default connect(null, matchDispatchToProps)(Searchbar);

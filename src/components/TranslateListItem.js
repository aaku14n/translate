import React from "react";
import PropTypes from "prop-types";

import "./css/TranslateListItem.css";

export default class TranslateListItem extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    return (
      <div className="TranslateListItem" onClick={() => this.handleClick()}>
        <div className="TranslateListItem-header">
          {this.props.header}
        </div>
        <div className="TranslateListItem-body">
          {this.props.subheader}
        </div>
      </div>
    );
  }
}

TranslateListItem.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  onClick: PropTypes.func
};

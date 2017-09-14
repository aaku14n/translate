import React from "react";
import PropTypes from "prop-types";

import "./css/TranslateListItem.css";

export default class TranslateListItem extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.pincode);
    }
  }
  bodyContent() {
    return this.props.subheader === null
      ? null
      : this.props.subheader.map(item => {
          return (
            <p key={Object.keys(item)}>
              <b>{Object.keys(item)} -</b> {Object.values(item)}
            </p>
          );
        });
  }
  render() {
    return (
      <div className="TranslateListItem" onClick={() => this.handleClick()}>
        <div className="TranslateListItem-header">{this.props.header}</div>
        <div className="TranslateListItem-body">{this.bodyContent()}</div>
      </div>
    );
  }
}

TranslateListItem.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.array,
  onClick: PropTypes.func
};

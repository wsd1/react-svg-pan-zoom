import React from 'react';
import PropTypes from 'prop-types';
import {
  POSITION_TOP, POSITION_BOTTOM
} from '../constants';

export default class ToolbarPadding extends React.Component {

  render() {
    let style = {
      display: "block",
      width: "20px",
      height: "20px",
      margin: [POSITION_TOP, POSITION_BOTTOM].indexOf(this.props.toolbarPosition) >= 0 ? "2px 1px" : "1px 2px",
      background: "none",
      padding: "0px",
      border: "0px",
      outline: "0px",
    };

    return (
      <div
        style={style}
      ></div>
    )
  }

}

ToolbarPadding.propTypes = {
  toolbarPosition: PropTypes.string.isRequired,
};

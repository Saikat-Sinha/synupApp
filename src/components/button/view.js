import React, { Component } from "react";
import StyledButton from "./style";

class Button extends Component {
  render() {
    return (
      <StyledButton
        className="dt-button"
        {...this.props}
        onClick={this.props.clickHandler}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;

import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  StyledModal,
  StyledModalBackground,
  StyledModalForeground,
  StyledModalHeader,
  StyledModalHeaderText,
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalFooter,
  StyledModalButton
} from "./style";

const ModalInner = props => {
  const { buttons, children, title, closeHandler, width } = props;

  return (
    <StyledModal>
      <StyledModalBackground />
      <StyledModalForeground width={width}>
        {(closeHandler || title) && (
          <StyledModalHeader>
            {title && <StyledModalHeaderText>{title}</StyledModalHeaderText>}
            {closeHandler && (
              <StyledModalCloseButton onClick={closeHandler}>
                ×
              </StyledModalCloseButton>
            )}
          </StyledModalHeader>
        )}
        <StyledModalContent>{children}</StyledModalContent>
        {buttons && (
          <StyledModalFooter>
            {buttons.map(button => {
              button.variant = button.variant ? button.variant : "default";
              return (
                <StyledModalButton
                  key={button.text}
                  onClick={button.clickHandler}
                  variant={button.variant}
                >
                  {button.text}
                </StyledModalButton>
              );
            })}
          </StyledModalFooter>
        )}
      </StyledModalForeground>
    </StyledModal>
  );
};

ModalInner.defaultProps = {
  width: "480px"
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal-root");
    this.el = document.createElement("div");
  }

  componentDidMount() {
    if (this.modalRoot) {
      this.modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.modalRoot) {
      this.modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(<ModalInner {...this.props} />, this.el);
  }
}

export { ModalInner };
export default Modal;

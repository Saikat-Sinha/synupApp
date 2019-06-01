import React, { Component } from "react";

import Modal, { ModalInner } from "../../components/modal";
import Button from "../../components/button";

export default class MainModal extends Component {
  render() {
    console.log(this.props);
    return this.props.isVisible ? (
      <Modal>
        <ModalInner
          closeHandler={ev => {
            console.log(ev);
            this.props.onCancelClick(ev, false);
          }}
          title="Dismiss Risk Group"
        >
          <React.Fragment>
            <div
              className="pl-15 pt-15"
              style={{ height: "300px", width: "500px" }}
            >
              <p className="highlighted">
                Are you sure you want to dismiss this risk group completely?
              </p>
            </div>
            <div className="pt-40">
              <div xs={3}>
                <Button
                  small
                  clickHandler={e => this.props.onCancelClick(e, false)}
                >
                  Cancel
                </Button>
              </div>
              <div xs={3}>
                {this.props.isDisabled ? (
                  <Button small danger clickHandler={e => console.log(e)}>
                    Loading...
                  </Button>
                ) : (
                  <Button
                    small
                    danger
                    clickHandler={e => this.props.onDismissConfirm(e)}
                  >
                    Yes, Dismiss
                  </Button>
                )}
              </div>
            </div>
          </React.Fragment>
        </ModalInner>
      </Modal>
    ) : null;
  }
}

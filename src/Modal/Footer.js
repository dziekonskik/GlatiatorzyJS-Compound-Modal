import React, { Component } from 'react';
import ModalContext from '../modalContext';

export class Footer extends Component {
  callToActionLabelFn = (fn) => {
    window.alert('OK');
    fn();
  };

  render() {
    return (
      <ModalContext.Consumer>
        {(toggle) => (
          <div className="Footer">
            <button onClick={toggle}>Cancel</button>
            <button onClick={() => this.callToActionLabelFn(toggle)}>
              {this.props.callToActionLabel}
            </button>
          </div>
        )}
      </ModalContext.Consumer>
    );
  }
}

export default Footer;

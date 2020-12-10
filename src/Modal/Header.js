import React, { Component } from 'react';
import ModalContext from '../modalContext';

export class Header extends Component {
  render() {
    return (
      <ModalContext.Consumer>
        {(toggle) => (
          <header className="Header">
            <div>{this.props.title}</div>
            <button onClick={toggle}>Close</button>
          </header>
        )}
      </ModalContext.Consumer>
    );
  }
}

export default Header;

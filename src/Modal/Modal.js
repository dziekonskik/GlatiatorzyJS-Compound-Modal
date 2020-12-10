import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export class Modal extends Component {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => !prevState.isOpen);
  };

  render() {
    const { isOpen } = this.state;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toggle: this.toggle })
    );
    return <div>{children}</div>;
  }
}

export default Modal;

import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export class Modal extends Component {
  render() {
    const children = React.Children.map(this.props.children, (child) =>
      console.log(this.props.children, child)
    );
    return <div>{children}</div>;
  }
}

export default Modal;

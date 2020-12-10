import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.state = {};
  }

  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  handleClickOutside = (event) => {
    console.log(event.target);
    if (event.target.className === 'Modal-outer') this.props.toggle();
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const { isOpen, toggle } = this.props;
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { isOpen, toggle: toggle })
    );

    return (
      <aside className="Modal-outer">
        <div ref={this.modal} className="Modal-inner">
          {children}
        </div>
      </aside>
    );
  }
}

export default Modal;

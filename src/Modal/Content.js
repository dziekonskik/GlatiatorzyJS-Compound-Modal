import React, { Component } from 'react';

export class Content extends Component {
  render() {
    const { children } = this.props;
    return <div className="Content">{children}</div>;
  }
}

export default Content;

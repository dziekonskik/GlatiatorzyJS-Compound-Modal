import React, { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <Modal>
        <Modal.Header title={'Tytuł modala'} />
        <Modal.Content>
          <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel={'Udało się'} />
      </Modal>
    );
  }
}

export default Modal;

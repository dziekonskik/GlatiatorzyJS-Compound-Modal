import React, { Component } from 'react';
import Modal from './Modal/Modal';
import ModalContext from './modalContext';
import './App.css';
class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <ModalContext.Provider value={this.toggle}>
        <div className="App">
          {!isOpen && <button onClick={this.toggle}>Toggle Modal</button>}
          {isOpen && (
            <Modal isOpen={isOpen} toggle={this.toggle}>
              <Modal.Header title={'Tytuł modala'} />
              <Modal.Content>
                <h1>to powinno tak działać</h1>
              </Modal.Content>
              <Modal.Footer callToActionLabel={'Udało się'} />
            </Modal>
          )}
        </div>
      </ModalContext.Provider>
    );
  }
}

export default App;

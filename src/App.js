import Modal from './Modal/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      return (
      <Modal>
        <Modal.Header title={'Tytuł modala'} />
        <Modal.Content>
          <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel={'Udało się'} />
      </Modal>
      );
    </div>
  );
}

export default App;

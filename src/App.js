import './App.scss';
import { Provider } from './connect';
import { store } from './store';
import NotesPage from './pages/notesPage';
import Modal from './components/modal';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <NotesPage />
        <Modal />
      </Provider>
    </div>
  );
}

export default App;

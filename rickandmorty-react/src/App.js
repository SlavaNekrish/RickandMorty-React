import { Main } from './Main';
import './css/Main.scss';
import './css/App.scss';
import './css/Character.scss';
import './css/Pagination.scss';
import './css/CharModal.scss';
import './css/ScrollToTop.scss';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Rick and Morty</h1>
      </div>
      <Main />
    </div>
  );
}

export default App;

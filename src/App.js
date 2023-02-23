import logo from './logo.svg';
import './App.css';

import Girokonto from './components/Girokonto.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <p><span id="logoImg">🍌</span></p>
        <h1 id="title">Banana Bank</h1>
      </header>
      <Girokonto/>
    </div>
  );
}

export default App;

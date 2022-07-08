import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Calculator from './components/calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;

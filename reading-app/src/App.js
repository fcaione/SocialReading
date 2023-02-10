import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/books" element = { <Books />} />
      </Routes>
    </div>
  );
}

export default App;

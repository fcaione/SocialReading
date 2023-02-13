import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import BookDetails from './components/BookDetails';
import PostsForm from './components/PostsForm';
import BooksForm from "./components/BooksForm"
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element = { <Signup />} />
        <Route path="/login" element = { <Login />} />
        <Route path="/books" element = { <Books />} />
        <Route path="/books/add" element = { <BooksForm />} />
        <Route path="/books/:id" element = { <BookDetails />} />
        <Route path="/books/:id/new" element = { <PostsForm />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import BookDetails from './components/BookDetails';
import PostsForm from './components/PostsForm';
import BooksForm from "./components/BooksForm"
import Login from './pages/Login';
import PostsUpdateForm from './components/PostsUpdateForm';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    getLoggedIn()
  }, [])

  const getLoggedIn = () => {
    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true)
      console.log("logged in")
    }
  }

  return (
    <div className="App">
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path="/" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>} />
        <Route path="/signup" element = { <Signup />} />
        <Route path="/home" element = { isLoggedIn ? <Books /> : <Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/books/add" element = { <BooksForm />} />
        <Route path="/books/:id" element = { <BookDetails />} />
        <Route path="/books/:id/new" element = { <PostsForm />} />
        <Route path="/posts/:id/update" element = { <PostsUpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;

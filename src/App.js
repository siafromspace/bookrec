import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Genre from './components/Genre';
import Trope from './components/Trope';
import Book from './components/Book';
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({ genre: "", trope: "" })

  const addGenre = (genre) => {
    setBook({ ...book, genre })
  }

  const addTrope = (trope) => {
    setBook({ ...book, trope })
  }

  return (
    <div className="h-screen bg-gradient-to-tr from-pink-500 to-pink-800 p-8 flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre addGenre={addGenre} book={book} />} />
          <Route path="/trope" element={<Trope addTrope={addTrope} book={book} />} />
          <Route path="/book" element={<Book book={book} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

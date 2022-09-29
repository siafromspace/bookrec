import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Genre from './components/Genre';
import Trope from './components/Trope';
import Book from './components/Book';
import Modal from './components/Modal';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  const [book, setBook] = useState({ genre: "", trope: "" })
  const [showModal, setShowModal] = useState(false)

  const addGenre = (genre) => {
    setBook({ ...book, genre })
  }

  const addTrope = (trope) => {
    setBook({ ...book, trope })
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode='wait' onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre addGenre={addGenre} book={book} />} />
          <Route path="/trope" element={<Trope addTrope={addTrope} book={book} />} />
          <Route path="/book" element={<Book book={book} setShowModal={setShowModal} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

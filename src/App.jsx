import { useState, useEffect } from 'react'
// import './styles/App.css'
import { ReactDOM } from 'react-dom/client'
import { Routes, Route } from 'react-router-dom';
import Articles from '../routes/Articles';
import Header from '../components/Header';

function App() {

  return (
    <>
    <Routes>
      <Route path='/Articles' element={<Articles />}></Route>
    </Routes>
    </>
  )
}

export default App

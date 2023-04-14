import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './paginas/login/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/login" element={<Login />} />

    </Routes>
  </Router>

  )
}

export default App

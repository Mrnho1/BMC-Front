import { useState } from "react";
import "./App.css";
import Navbar from "./components/staticos/navbar/Navbar";
import Footer from "./components/staticos/footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/staticos/navbar/Navbar";
import Footer from "./components/staticos/footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Team from "./paginas/team/Team";
import Cadastro from "./paginas/cadastro/Cadastro";
import Produtos from "./paginas/produtos/Produtos";
import Contato from "./paginas/contato/Contato";

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
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ButtonAppBar from "./components/staticos/navbar/Navbar";
import Footer from "./components/staticos/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Team from "./paginas/team/Team";

import Produtos from "./paginas/produtos/Produtos";
import Contato from "./paginas/contato/Contato";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import { Provider } from "react-redux";
import store from "./store/store";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ButtonAppBar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/team" element={<Team />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/editar-categoria/:id" element={<ListaCategoria />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

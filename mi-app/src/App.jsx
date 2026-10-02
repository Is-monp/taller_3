import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Views/Home";
import Cursos from "./Views/Cursos";
import Nosotros from "./Views/Nosotros";
import Login from "./Views/Login";
import NoEncontrado from "./Views/noEncontrado";

import "./components/Header.css";
import "./components/Footer.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
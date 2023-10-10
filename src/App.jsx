import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/";
import { darkTheme, lightTheme } from "./theme.js";
import { useState } from "react";
import Container from "@mui/material/Container";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Detalle from "./components/Detalle/Detalle.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";

export default function App() {
  const [temaOscuro, setTemaOscuro] = useState(true);
  const cambioDeTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <ThemeProvider theme={temaOscuro ? lightTheme : darkTheme}>
      <Container component="main" style={{ maxWidth: "100%", padding: 0 }}>
        <Router>
          <NavBar cambioDeTema={cambioDeTema} temaOscuro={temaOscuro} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/detalle/:id" element={<Detalle />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

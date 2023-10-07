import { Container, Divider, ThemeProvider } from "@mui/material";
import NavBar from "./components/navbar/Navbar";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme.js";
import Footer from "./components/Footer/Footer";
import Categoria from "./components/Categoria/Categoria";
import SlideBanner from "./components/Banner/SlideBanner";
import styled from "styled-components";

export default function App() {
  const [temaOscuro, setTemaOscuro] = useState(true);
  const cambioDeTema = () => {
    setTemaOscuro(!temaOscuro);
  };
  return (
    <ThemeProvider theme={temaOscuro ? lightTheme : darkTheme}>
      <Container component="main" style={{ maxWidth: "100%", padding: 0 }}>
        <NavBar cambioDeTema={cambioDeTema} temaOscuro={temaOscuro} />
        <SlideBanner />
        <Categoria />
        <Divider sx={{ background: "secondary.main", border: 2 }} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

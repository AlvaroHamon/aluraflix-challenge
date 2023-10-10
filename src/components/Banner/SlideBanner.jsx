import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Paper } from "@mui/material";

const EstilosCardContent = styled(CardContent)`
  text-align: justify;
  max-width: 50%;
  @media (max-width: 1024px) {
    max-width: 100%;
    h5 {
      font-size: 1rem;
      text-align: center;
    }
    span {
      display: none;
    }
  }
  @media (max-width: 425px) {
    h5 {
      display: none;
    }
  }
`;

export default function SlideBanner() {
  const [datos, setDatos] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/";
        const llave =
          "?api_key=ce63677590eefbef4c97a2425c2942d1&language=es-MX";
        const respuesta = await (
          await axios.get(url + "now_playing" + llave)
        ).data.results;
        setDatos(respuesta);
      } catch (error) {}
    };
    obtenerDatos();
  }, []);

  const settings = {
    // Configuración del carrusel
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <Container
      style={{
        maxWidth: "100%",
        backgroundColor: "#000",
        padding: "0 20%",
      }}
    >
      <Slider {...settings}>
        {datos ? (
          datos.map(({ id, title, poster_path, backdrop_path, overview }) => (
            <Paper
              key={id}
              sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: 500,
              }}
            >
              <Paper
                // style={{ maxWidth: "100%", padding: 0 }}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    background: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    // margin: 2,
                  }}
                >
                  <CardActionArea sx={{ maxWidth: 250, maxHeight: 350 }}>
                    <CardMedia
                      component="img"
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                      sx={{ maxWidth: 250, maxHeight: 350 }}
                    />
                  </CardActionArea>
                  <EstilosCardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        textDecoration: "underline",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="h7"
                      sx={{
                        color: "#FFF",
                      }}
                    >
                      {overview}
                    </Typography>
                  </EstilosCardContent>
                </Card>
              </Paper>
            </Paper>
          ))
        ) : (
          <div>Cargando...</div>
        )}
      </Slider>
    </Container>
  );
}

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import TarjetaMovie from "../TarjetaMovie/TarjetaMovie";
import { useEffect } from "react";
import axios from "axios";

//funcion para traer poster de la pelicula
const urlImg = (posterPath) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};
//funcion para traer datos de las peliculas
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=ce63677590eefbef4c97a2425c2942d1&language=es-MX";

export default function Categoria() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const respuesta = (await axios.get(BASE_URL + "popular" + API_KEY)).data
          .results;
        setData(respuesta);
      } catch (error) {
        console.log("error al obtener datos " + error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    dots: false,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Container
        maxWidth="xl"
        style={{ maxWidth: "100%" }}
        sx={{
          backgroundColor: "secondary.main",
          padding: 5,
        }}
      >
        <Card
          elevation={1}
          sx={{ backgroundColor: "secondary.main", marginBottom: 2 }}
        >
          <Typography variant="h6" color={"text.primary"}>
            Populares
          </Typography>
        </Card>
        <Card sx={{ backgroundColor: "secondary.main" }} elevation={0}>
          <Slider {...settings}>
            {data ? (
              data.map(({ poster_path, id, title }) => (
                <Container key={id}>
                  <TarjetaMovie
                    posterPath={urlImg(poster_path)}
                    title={title}
                    id={id}
                  />
                </Container>
              ))
            ) : (
              <>cargando...</>
            )}
          </Slider>
        </Card>
      </Container>
    </>
  );
}
// image.tmdb.org/t/p/w500

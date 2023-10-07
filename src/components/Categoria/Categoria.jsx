import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Tooltip, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

const estilosCarrusel = {
  maxWidth: "100%",
};

const EstilosCard = styled(Card)`
  width: 200;
  height: 300;
`;

export default function Categoria() {
  const url = "https://api.themoviedb.org/3/movie/";
  const llave = "?api_key=ce63677590eefbef4c97a2425c2942d1&language=es-MX";
  const [data, setData] = useState([]);

  useEffect(() => {
    const datos = async () => {
      try {
        const respuesta = (await axios.get(url + "popular" + llave)).data
          .results;
        setData(respuesta);
      } catch (error) {
        console.log("error al obtener datos " + error);
      }
    };
    datos();
  }, []);

  // const settings = {
  //   // Configuración del carrusel
  //   // dots: true,
  //   // infinite: true,
  //   // speed: 500,
  //   // autoplaySpeed: 5000,
  //   // slidesToShow: 7,
  //   slidesToScroll: 1,
  //   // centerMode: true,
  //   // centerPadding: "60px",
  //   // arrows: true,
  //   autoplay: true,
  //   // pauseOnHover: true,
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 7,
  //   speed: 500,
  //   focusOnSelect: true,
  // };

  const settings = {
    slidesToScroll: 1,
    centerMode: true,
    // slidesToShow: 5, // Puedes ajustar este número según tus necesidades
    speed: 500,
    focusOnSelect: true,
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
            data.map(({ poster_path, id }) => (
              <Card key={id} sx={{ maxWidth: 200, maxHeight: 300 }}>
                <CardMedia
                  component="img"
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Card>
            ))
          ) : (
            <>cargando...</>
          )}
        </Slider>
      </Card>
      {/* <Tooltip open placement="top" size="lg" variant="outlined">
        <Box
          sx={{
            marginBottom: 2,
            boxShadow: 1,
            borderRadius: 5,
            paddingLeft: 2,
          }}
        >
          <Typography variant="button">Populares</Typography>
        </Box>
      </Tooltip>
      <Carousel responsive={responsive} swipeable infinite rtl>
        {data.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 250, maxHeight: 350, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </CardActionArea>
          </Card>
        ))}
      </Carousel> */}
    </Container>
  );
}
// image.tmdb.org/t/p/w500

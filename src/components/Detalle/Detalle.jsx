import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//funcion para traer datos de las peliculas
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=ce63677590eefbef4c97a2425c2942d1&language=es-MX";
const URL_IMAGE = (imagenFondo) => {
  return `https://image.tmdb.org/t/p/w500${imagenFondo}`;
};

export default function Detalle() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  //conexion con la api
  useEffect(() => {
    const detallePelicula = async () => {
      try {
        const respose = await axios.get(BASE_URL + id + API_KEY);
        const datosPelicula = respose.data;
        setMovieDetail(datosPelicula);
      } catch (error) {
        console.log(error);
      }
    };
    detallePelicula();
  }, [id]);
  //verificar los datos
  if (!movieDetail) {
    return <>Cargando...</>;
  }
  //almacenar datos en variables y destructurar movieDetail
  // console.log(movieDetail);
  const { title, backdrop_path, poster_path, overview, release_date, genres } =
    movieDetail;
  const lanzamiento = release_date.substring(0, 4);
  const generos = genres.map((genre) => genre.name).join(", ");

  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${URL_IMAGE(backdrop_path)})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
        }}
      >
        <Paper
          sx={{
            backgroundColor: "rgba(0,0,0,0.6)",
            height: "100%",
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
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
          >
            <CardActionArea sx={{ maxWidth: 250, maxHeight: 350 }}>
              <CardMedia
                component="img"
                src={URL_IMAGE(poster_path)}
                alt={title}
                sx={{ minhWidth: 250, minHeight: 350 }}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                }}
              >
                {title} ({lanzamiento})
              </Typography>
              <Typography color="#fff">{generos}</Typography>
              <Typography
                variant="h7"
                sx={{
                  color: "#FFF",
                }}
              >
                {overview}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Paper>
    </>
  );
}

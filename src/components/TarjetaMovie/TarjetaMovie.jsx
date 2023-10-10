import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

export default function TarjetaMovie({ posterPath, title, id }) {
  return (
    <Card sx={{ maxWidth: 200, maxHeight: 300 }}>
      <Link to={`/detalle/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            sx={{ width: "100%", height: "100%" }}
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          />
        </CardActionArea>
      </Link>
    </Card>
  );
}

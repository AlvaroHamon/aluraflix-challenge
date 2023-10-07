import { Card, CardActionArea, CardMedia } from "@mui/material";

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 560 }}>
      <CardActionArea>
        <CardMedia
          sx={{ width: 560, height: 320 }}
          component="img"
          src="https://www.youtube.com/embed/RqW2UI3cRLo?si=5MR1ernK9PX-n5yp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
          Video
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}

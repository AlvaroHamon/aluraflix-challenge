import { Box } from "@mui/material";
import img from "../../img/logo2.png";

export default function Logo() {
  return (
    <>
      <Box
        component="img"
        src={img}
        alt="Logo"
        sx={{ width: 300, marginTop: 1 }}
      />
    </>
  );
}

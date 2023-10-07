import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import NavListDrawer from "./NavListDrawer";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import MaterialUISwitch from "./MaterialUISwitch";
import Logo from "../Logo/Logo";
import { styled } from "@mui/material/styles";

const Navbar = styled(Toolbar)`
  @media (max-width: 527px) {
    display: flex;
    flex-direction: column;
  }
`;
export default function NavBar({ cambioDeTema }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Navbar>
          <Grid flexGrow={1}>
            <Logo />
          </Grid>
          <Grid>
            <IconButton
              sx={{ color: "text.primary" }}
              size="large"
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon sx={{ color: "text.primary" }} />
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                Menu
              </Typography>
            </IconButton>
            <IconButton xs={1}>
              <MaterialUISwitch onChange={cambioDeTema} />
            </IconButton>
          </Grid>
        </Navbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => {
          setOpen(false);
        }}
      >
        <NavListDrawer />
      </Drawer>
    </>
  );
}

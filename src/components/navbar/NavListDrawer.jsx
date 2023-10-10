import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "primary.main" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemButton>
              <HomeIcon sx={{ mr: 1 }} />
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <FavoriteIcon sx={{ mr: 1 }} />
              <ListItemText primary="Favoritos" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

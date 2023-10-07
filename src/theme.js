import { grey, blueGrey, blue, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Tema claro
const lightTheme = createTheme({
  palette: {
    type: 'light', // Cambia el tipo de paleta a light (claro)
    primary: {
      main: indigo[500] // Color principal
    },
    secondary: {
      main: "#FFF",  // Color secundario
    },
    text: {
      primary: "#000"
    }
  },
});

// Tema oscuro
const darkTheme = createTheme({
  palette: {
    type: 'dark', // Cambia el tipo de paleta a dark (oscuro)
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[800],
    },
    text: {
      primary: "#fff"
    }
  },
});

export { lightTheme, darkTheme };

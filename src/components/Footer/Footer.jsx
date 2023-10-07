import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";
import Logo from "../Logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";

const estilosFooter = {
  maxWidth: "100%",
};
const ContainerStyle = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  @media (max-width: 767px) {
    flex-direction: column;
    img {
      padding-bottom: 5px;
      width: 270px;
    }
    ul,
    li {
      padding: 0;
    }
  }
`;
export default function Footer() {
  return (
    <>
      <ContainerStyle
        component="footer"
        style={estilosFooter}
        sx={{ backgroundColor: "primary.main" }}
      >
        <Logo />

        {/* Utilizamos un Grid para los elementos centrados */}

        <Typography sx={{ color: "text.primary", textAlign: "center" }}>
          Elaborado por Alvaro Hamon. 2023&copy;
        </Typography>
        <List>
          <ListItem>
            <ListItemButton
              href="https://github.com/AlvaroHamon"
              target="_blank"
            >
              <GitHubIcon sx={{ color: "text.primary" }}></GitHubIcon>
            </ListItemButton>
            <ListItemButton
              href="https://www.linkedin.com/in/alvarohamon/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "text.primary" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </ContainerStyle>
    </>
  );
}

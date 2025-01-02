import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navigation from "./Nav.jsx";
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from "react-router-dom";
import { Typography, useMediaQuery } from '@mui/material';
import Logo from '../../assets/images/MM.png'
import {Box} from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    // justifyContent: 'space-between',
  },
  logo: {
    width: '120px',
    height: 'auto',
    position: 'fixed'
  },
  up: {
    background: 'transparent',
    position: 'fixed',
    left: '10px',
    bottom: '15px'
  }
}

export default function LeftLogo() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const isMobile = useMediaQuery('(max-width:900px)');


  return (
    <Grid
      container
      style={styles.container}
    >
      {/* Logo */}
      {!isMobile ? (
        // <img src={Logo} alt="Logo" style={styles.logo} />) : ('')}
        <Box sx={{display: "flex", position: "fixed"}}>
        <Typography  sx={{color: "white", fontSize: "4rem", fontFamily: "Water Brush"}}>M</Typography>
        <Typography sx={{color: "white", fontSize: "4rem", paddingTop: "1.9rem", fontFamily: "Water Brush"}}>M</Typography>
        </Box>
        ) : ('')}
      {/* Nav */}
      <Navigation />
      {/* Return to top icon if not on contact page */}
      {location !== "Contact" ? (
        <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
          <Fab 
          color="primary" 
          aria-label="up"
          style={styles.up}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollLink>) : 
        ('')}
    </Grid>
  );
}

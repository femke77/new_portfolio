import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:700px)');

  const styles = {
    rightSocials: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      right: '50px',
      top: '25vh',
    }
  }

  return (
      <Grid container={true} spacing={2}>
     
        <Grid item={true} xs={1} sm={1.5} md={1} lg={2}>
          <LeftLogo />
        </Grid>
  
        <Grid item={true} xs={11} sm={10} md={9} lg={8}>
            {children}
        </Grid>
       
        <Grid item={true} xs={0} sm={1.5} md={2} lg={2}>
          {isMobile ? ('') : (
          <RightSocial styles={styles.rightSocials} placement={'right'} color={'primary'} background={'transparent'} />)}
        </Grid>
      </Grid>
  );
}


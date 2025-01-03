import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:900px)');

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
     
        <Grid item={true} xs={2} sm={1.5} md={1.5} lg={1.5}>
          <LeftLogo />
        </Grid>
  
        <Grid item={true} xs={10} sm={9} md={8.5} lg={9.5}>
            {children}
        </Grid>
       
        <Grid item={true} xs={0} sm={1.5} md={2} lg={2}>
          {isMobile ? (null) : (
          <RightSocial styles={styles.rightSocials} placement={'right'} color={'primary'} background={'transparent'} />)}
        </Grid>
      </Grid>
  );
}


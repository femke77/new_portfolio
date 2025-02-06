import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material';
import { lazy } from 'react';
import styled from '@mui/system/styled';
const Lottie = lazy(() => import('lottie-react')); // dynamic import
import animationData from '../../utils/rightArrowAnimate.json';

const Item = styled('div')(() => ({
  backgroundColor: 'transparent',
  marginTop: '12rem',
  marginBottom: '18rem',
}));

const styles = {
  dev: {
    marginTop: '-30px',
  },
  connect: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
  },
  arrow: {
    width: '50px',
  },
};

export default function Intro() {
  const handleConnectClick = () => {
    window.location.href = 'mailto:meg.meyers.388@gmail.com';
  };

  return (
    <Grid container={true} id='home' spacing={2}>
      <Grid xs={12} sm={10} md={8}>
        <Item sx={{ textAlign: 'left' }}>
          <Typography component='h1' sx={{ fontSize: '2.5rem' }}>
            Meg Meyers
          </Typography>
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: '600',
              lineHeight: '1',
            }}
          >
            Software Engineer {''}
          </Typography>
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: '600',
              lineHeight: '1',
              marginBottom: '1rem',
            }}
          >
            {/* Engineer  */}
          </Typography>

          <h3 style={styles.connect} onClick={handleConnectClick}>
            Let's connect
            <Lottie animationData={animationData} style={styles.arrow} />
          </h3>
        </Item>
      </Grid>
    </Grid>
  );
}

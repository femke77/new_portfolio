import Grid from "@mui/system/Unstable_Grid";
import { lazy } from "react";
import styled from "@mui/system/styled";
const Lottie = lazy(() => import("lottie-react")); // dynamic import
import animationData from "../../utils/rightArrowAnimate.json";
import { Typography } from "@mui/material";

const Item = styled("div")(() => ({
  backgroundColor: "transparent",
  marginTop: "12rem",
  marginBottom: "18rem",
}));

const styles = {
  dev: {
    marginTop: "-30px",
  },
  connect: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  arrow: {
    width: "50px",
  },
};

export default function Intro() {
  const handleConnectClick = () => {
    window.location.href = "mailto:meg.meyers.388@gmail.com";
  };

  return (
    <Grid container={true} id="home" spacing={2}>
      <Grid xs={12} sm={10} md={8}>
        <Item sx={{ textAlign: "left" }}>
          <Typography component="h1" sx={{fontSize: "2rem"}}>Meg Meyers</Typography>
      
          <h1>Software</h1>
          <h1 style={styles.dev}>Developer</h1>
          <h3 style={styles.connect} onClick={handleConnectClick}>
            Let's connect
            {/* <ArrowCircleRightOutlinedIcon fontSize='medium' style={styles.arrow} /> */}
            <Lottie animationData={animationData} style={styles.arrow} />
          </h3>
        </Item>
      </Grid>
    </Grid>
  );
}

import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import useScript from "../../hooks/UseScript";

const Item = styled("div")(({ theme }) => ({
  background: "transparent",
  padding: theme.spacing(1),
  textAlign: "left",
}));

function AboutMe() {
  return (
    <>
      <h2>About Me</h2>
      <p>
       Award winning full stack developer and instructor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo voluptatem delectus eaque dolor! Error, nam doloremque. Suscipit maxime sequi laboriosam iusto aut, corporis amet harum mollitia fugit possimus autem.
      </p>
      <br />
    </>
  );
}

export default function About() {
  useScript("//cdn.credly.com/assets/utilities/embed.js");

  return (
    <Grid
      container={true}
      id="about"
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          flexDirection: "column",
        },
      })}
    >
      <Grid item="true" xs={12} sm={8} md={9}>
        <Item>
          <AboutMe />
        </Item>
      </Grid>{" "}
      <Grid item="true" xs={12} sm={4} md={3}>
    
        <Item style={{ backgroundColor: "white", color: "black", marginTop: "3rem", height: "250px", width: "182px" }}>
    
          <div
        // style={{ width: "100%", height: "100%" }}
            data-iframe-width="170"
            data-iframe-height="250"
            data-share-badge-id="10d343b0-6ceb-4b18-960c-a46c0b76c228"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </Item>
      </Grid>
    </Grid>
  );
}

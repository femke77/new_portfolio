import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import useScript from '../../hooks/UseScript';

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

function AboutMe() {
  return (
    <>
      <h2>About Me</h2>
      <p>
        I’m a senior software engineer, product manager, and educator with a
        background in building and improving production software from the ground
        up. My work spans full-stack development, cloud infrastructure,
        databases, payments, testing, performance engineering, and product
        architecture, with a growing focus on applied artificial intelligence.
        <br /> <br />I hold a B.S. in Computer Science, graduating cum laude
        with a 3.94 GPA, and completed advanced coursework in machine learning,
        data mining, algorithms, databases, operating systems, security, and
        related areas. Earlier in my career, I helped develop an AI-driven
        nutrition application using computer vision, earning second place in
        CSUN’s AI Jam and subsequent NSF I-Corps funding. <br /> <br /> Today, I
        lead engineering and technical product development for Host Guest, a
        production homestay marketplace, where I have re-architected inherited
        systems, built payment and trust-and-safety infrastructure, managed AWS
        environments, expanded automated testing, and improved core product
        conversion. I also spent several years teaching and mentoring
        software-development students through edX, where I received a
        performance award for both top metrics and the greatest number of
        students supported. <br /> <br /> Outside of my professional work, I
        enjoy building products independently. BingeBox is a full-stack React
        and Node.js application that gave me the opportunity to go deeply into
        performance, state management, caching, responsive design, and user
        experience, ultimately raising its Lighthouse performance score from 67
        to 99. <br /> <br />
        I’m most energized by difficult technical problems, thoughtful product
        design, and learning technologies deeply enough to understand not just
        how to use them, but why they work.
      </p>
      <br />
    </>
  );
}

export default function About() {
  useScript('//cdn.credly.com/assets/utilities/embed.js');

  return (
    <Grid
      container={true}
      id='about'
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.only('xs')]: {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      })}
    >
      <Grid item='true' xs={12} sm={8} md={9}>
        <Item>
          <AboutMe />
        </Item>
      </Grid>{' '}
      <Grid
        item='true'
        xs={12}
        sm={4}
        md={3}
        sx={{
          paddingTop: {
            xs: '0rem',
            sm: '3rem',
            md: '3rem',
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Item
          style={{
            backgroundColor: 'white',
            color: 'black',
            height: '260px',
            width: '186px',
          }}
        >
          <div
            // style={{ width: "100%", height: "100%" }}
            data-iframe-width='170'
            data-iframe-height='250'
            data-share-badge-id='10d343b0-6ceb-4b18-960c-a46c0b76c228'
            data-share-badge-host='https://www.credly.com'
          ></div>
        </Item>
      </Grid>
    </Grid>
  );
}

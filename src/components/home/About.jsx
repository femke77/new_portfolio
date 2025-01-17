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
      <h2>About Me</h2>•
      <p>
        I am an award winning full stack developer and educator with a passion
        for creating web applications that solve real world problems. With my
        strong background in computer science and software engineering, I am
        able to build scalable and maintainable applications that are easy to
        use and understand. My code is simple, clean and efficient, and I always
        strive to deliver the best possible solution to my clients.
        <br />
        <br />I hold a BS degree in Computer Science with post graduate studies
        in Machine Learning and Relational Databases. I have over 10 years of
        experience in software development and have worked with a wide range of
        technologies including JavaScript, TypeScript, React, Node.js, SQL,
        NoSQL, Apollo GraphQL, and many more.
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
        sx={{ paddingTop: { xs: '0rem', sm: '3rem', md: '3rem' } }}
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

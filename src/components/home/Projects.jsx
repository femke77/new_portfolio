import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';
import { Grow, Typography } from '@mui/material';
import projectData from '../../utils/projectData.json';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
      <h2>Projects</h2>
      <Typography variant="body1" gutterBottom>
        A sampling of just a few of the many projects I have worked on from
        2019-2025. Most projects are maintained and added to regularly. These
        projects represent my own unique code, not internet tutorials or AI.
      </Typography>
    </>
  );
}

export default function Projects() {
  return (
    <Grid
      container
      id="projects"
      spacing={4}
      // justifyContent="center"
      sx={{ flexWrap: 'wrap', marginBottom: '3rem', marginTop: '-8rem' }}
    >
      <Grid item xs={12}>
        <Item>
          <ProjectText />
        </Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grow key={index} in={true} timeout={1500 * index}>
          <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={4}>
            <ProjectCard {...project} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

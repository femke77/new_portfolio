import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';
import { Grow } from '@mui/material';
import projectData from '../../utils/projectData.json';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
      <h2>Projects</h2>
    </>
  );
}



export default function Projects() {
  return (
    <Grid
      container
      id="projects"
      spacing={4}
      justifyContent="censter"
      sx={{ flexWrap: 'wrap', marginBottom: '3rem' }}
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

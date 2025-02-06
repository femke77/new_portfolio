import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';
import { Grow, Typography } from '@mui/material';
import projectData from '../../utils/projectData.json';
import { useRef, useState, useEffect } from 'react';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
      <h2>Projects</h2>
      <Typography variant='body1' gutterBottom>
        A sampling of just a few of the many projects I have worked on from
        2019-2025. Most projects are maintained and added to regularly. These
        projects represent my own unique code,{' '}
        <span style={{ fontWeight: 'bold' }}>
          not internet tutorials or AI generated code.
        </span>
      </Typography>
    </>
  );
}

export default function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
      },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Grid
      ref={projectsRef}
      container
      id='projects'
      spacing={4}
      sx={{
        flexWrap: 'wrap',
        marginBottom: '3rem',
        marginTop: {
          xs: '1rem', // Mobile devices
          sm: '1rem', // Tablets
          md: '-8rem', // Desktop and up
        },
        minHeight: '100px',
      }}
    >
      <Grid item xs={12}>
        <Item>
          <ProjectText />
        </Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grow key={index} in={isVisible} timeout={1200 * index} appear={true}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <ProjectCard {...project} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

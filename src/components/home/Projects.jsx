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
        projects represent my own unique code, not internet tutorials or AI.
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
    
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
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
      sx={{ flexWrap: 'wrap', marginBottom: '3rem', marginTop: '-8rem' }}
    >
      <Grid item xs={12}>
        <Item>
          <ProjectText />
        </Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grow key={index} in={isVisible} timeout={1200 * index}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <ProjectCard {...project} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

/*
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
        projects represent my own unique code, not internet tutorials or AI.
      </Typography>
    </>
  );
}

export default function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add debug logging
    console.log('Initial mount - viewport height:', window.innerHeight);
    console.log('Projects container position:', projectsRef.current?.getBoundingClientRect());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log('Intersection detected:', {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            boundingClientRect: entry.boundingClientRect,
          });

          if (entry.isIntersecting) {
            console.log('Setting visible to true');
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Reduce threshold for mobile
        threshold: 0.05,
        // Add root margin to trigger earlier
        rootMargin: '50px 0px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      console.log('Cleanup - disconnecting observer');
      observer.disconnect();
    };
  }, []);

  // Log when visibility changes
  useEffect(() => {
    console.log('Visibility changed to:', isVisible);
  }, [isVisible]);

  return (
    <Grid
      ref={projectsRef}
      container
      id='projects'
      spacing={4}
      sx={{ 
        flexWrap: 'wrap', 
        marginBottom: '3rem', 
        marginTop: '-8rem',
        // Add min-height to ensure container is large enough to detect
        minHeight: '100px'
      }}
    >
      <Grid item xs={12}>
        <Item>
          <ProjectText />
        </Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grow 
          key={index} 
          in={isVisible} 
          timeout={1200 * index}
          // Add appear prop to ensure animation runs on first render
          appear={true}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
            <ProjectCard {...project} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}*/
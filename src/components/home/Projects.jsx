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

// const projectData = [
//   {
//     img: portfolio,
//     title: "Portfolio",
//     subtitle: "Personal web dev folder built with React",
//     github: "https://github.com/jayabaldwin/jaya-react-portfolio",
//     website: "www.jayabaldwin.com",
//     chips: ["React.js", "Node.js", "Material UI"],
//   },
//   {
//     img: elevate,
//     title: "Elevate",
//     subtitle: "Enhanced company management software",
//     github: "https://github.com/jayabaldwin/elevate",
//     website: "https://elevate-task-manager-4dc7b75f392c.herokuapp.com/",
//     chips: ["Node.js", "MySQL", "Sequelize", "Express.js", "Bootstrap"],
//   },
//   {
//     img: weatherDashboard,
//     title: "Weather Dashboard",
//     subtitle: "A 5-Day Weather Forecast utilising Open Weather Maps Api",
//     github: "https://github.com/jayabaldwin/weather-dashboard",
//     website: "https://jayabaldwin.github.io/weather-dashboard/",
//     chips: ["Javascript", "HTML", "CSS"],
//   },
//   {
//     img: socialNetwork,
//     title: "Social Network API",
//     subtitle: "Simplistic social network API utilising MongoDB",
//     github: "https://github.com/jayabaldwin/social-network-api",
//     chips: ["Node.js", "MongoDB", "Mongoose", "Express.js"],
//   },
//   {
//     img: ecommerce,
//     title: "E-Commerce Backend Database",
//     subtitle:
//       "A backend e-commerce application that utilises Express.js API and Sequelize to interact with a MySQL database",
//     github: "https://github.com/jayabaldwin/e-commerce-backend",
//     chips: ["Node.js", "MySQL", "Sequelize", "Express.js"],
//   },
//   {
//     img: employeeTracker,
//     title: "SQL: Employee Tracker",
//     subtitle:
//       "Content management systems (CMS), CLI application, to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
//     github: "https://github.com/jayabaldwin/employee-tracker",
//     chips: ["Node.js", "MySQL", "Inquirer"],
//   },
// ];

export default function Projects() {
  return (
    <Grid
      container
      id="projects"
      spacing={4}
      justifyContent="censter"
      sx={{ flexWrap: 'wrap' }}
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

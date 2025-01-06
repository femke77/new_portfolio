import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

// TODO rename files to make STT look better
import javascript from '../../assets/icons/javascript.png';
import nodeJS from '../../assets/icons/nodejs.png';
import expressJS from '../../assets/icons/expressjs.png';
import react from '../../assets/icons/react.png';
import materialUI from '../../assets/icons/materialUI.png';

import bootstrap from '../../assets/icons/bootstrap.png';
import css3 from '../../assets/icons/css3.png';
import mongoDB from '../../assets/icons/mongodb.png';
import html5 from '../../assets/icons/HTML5.png';
import mysql from '../../assets/icons/mysql.png';
import sequelize from '../../assets/icons/sequelize.png';
import github from '../../assets/icons/github.png';
import docker from '../../assets/icons/docker.png';
import tailwindCSS from '../../assets/icons/TailwindCSS.png';
import handlebars from '../../assets/icons/Handlebars.png';
import typescript from '../../assets/icons/TypeScript.png';
import mongoose from '../../assets/icons/Mongoose.png';
import vite from '../../assets/icons/vite.png';
import redux from '../../assets/icons/Redux.png';
import postgres from '../../assets/icons/PostgresSQL.png';
import firebase from '../../assets/icons/Firebase.png';
import cypress from '../../assets/icons/Cypress.png';
import heroku from '../../assets/icons/Heroku.png';
import gsap from '../../assets/icons/gsap.png';
import graphQL from '../../assets/icons/GraphQL.png';

import * as icons from '../../assets/icons/index.js';
console.log(icons);
console.log(Object.keys(icons));



// TODO extract STT to another component
import { StyledTooltip } from '../layouts/RightSocial';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const technologies = [
  javascript,
  nodeJS,
  expressJS,
  react,
  materialUI,
  bootstrap,
  tailwindCSS,
  css3,
  mongoDB,
  mysql,
  sequelize,
  github,
  docker,
  handlebars,
  typescript,
  mongoose,
  html5,
  firebase,
  cypress,
  redux,
  postgres,
  heroku,
  vite,
  gsap,
  graphQL,
];

export default function Gallery() {
  return (
    <Grid container={true} sx={{ justifyContent: 'center' }}>
      {Object.values(icons).map((tech, index) => (
        <StyledTooltip
          key={index}
          title={Object.keys(icons)[index]}
          arrow
        >
          {/* PRODUCTION: */}
          {/* <StyledTooltip key={index} title={tech.split("/")[2].split("-")[0]} arrow> */}
          <Item key={index}>
            <img
              src={tech}
              alt={tech}
              style={{ width: '50px', marginTop: '1rem', marginRight: '1rem' }}
            />
          </Item>
        </StyledTooltip>
      ))}
    </Grid>
  );
}

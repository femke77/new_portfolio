import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import javascript from '../../assets/icons/javascript.png'
import nodejs from '../../assets/icons/nodejs.png'
import expressjs from '../../assets/icons/expressjs.png'
import react from '../../assets/icons/react.png'
import materialUI from '../../assets/icons/materialUI.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import css3 from '../../assets/icons/css3.png'
import mongoDB from '../../assets/icons/mongodb.png'
import mysql from '../../assets/icons/mysql.png'
import sequelize from '../../assets/icons/sequelize.png'
import github from '../../assets/icons/github.png'


const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const technologies = [
    javascript, 
    nodejs, 
    expressjs, 
    react, 
    materialUI, 
    bootstrap, 
    css3, 
    mongoDB, 
    mysql, 
    sequelize, 
    github
]

export default function Gallery() {
    return (
      <Grid container={true} sx={{ justifyContent: 'center'}}>
      {technologies.map((tech, index) => (
        <Item key={index} title={tech}>
          <img src={tech} alt={tech} 
          style=
          {{ width: '50px', 
             marginTop: '1rem', 
             marginRight: '1rem' }} />
        </Item>
      ))}
    </Grid>
    );
  }

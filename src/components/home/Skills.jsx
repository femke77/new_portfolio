import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Gallery from '../home/Gallery.jsx';

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
}));

function SkillsText() {
  return (
    <>
      <h2>Skills & Technologies</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio
        omnis suscipit quibusdam. Quisquam magni, natus, provident, deleniti at
        doloribus commodi necessitatibus architecto pariatur quia nemo sequi
        consequatur excepturi ad.
      </p>
    </>
  );
}

export default function Skills() {
  return (
    <Grid
      container={true}
      id="skills"
      sx={{ display: 'column', mb: '10rem', justifyContent: 'center' }}
      spacing={2}
    >
      <Grid>
        <Item>
          <SkillsText />
        </Item>
      </Grid>
      <Grid>
        <Gallery />
      </Grid>
    </Grid>
  );
}

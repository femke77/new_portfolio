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
        The following represent the skills and technologies I am most proficient in. It is not a complete list of all the technologies I have worked with.
      </p>
    </>
  );
}

export default function Skills() {
  return (
    <Grid
      container={true}
      id="skills"
      sx={{ display: 'column', mb: '9rem' }}
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

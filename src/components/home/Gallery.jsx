import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

import * as icons from '../../assets/icons/index.js';

// TODO extract STT to another component
import { StyledTooltip } from '../layouts/RightSocial';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function Gallery() {
  return (
    <Grid container={true} sx={{ justifyContent: 'center' }}>
      {Object.values(icons).map((path, index) => (
        <StyledTooltip key={index} title={Object.keys(icons)[index]} arrow>
          <Item key={index}>
            <img
              src={path}
              alt={Object.keys(icons)[index]}
              style={{ width: '50px', marginTop: '1rem', marginRight: '1rem' }}
            />
          </Item>
        </StyledTooltip>
      ))}
    </Grid>
  );
}

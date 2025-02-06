import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LayersIcon from '@mui/icons-material/Layers';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const socialIcons = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/femke77' },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/meg-meyers-11891757/',
  },
  // { icon: <LayersIcon />, label: 'Stack Overflow', href: 'https://stackoverflow.com/users/22643123/jayabaldwin?tab=profile' },
  {
    icon: <SendIcon />,
    label: 'Email',
    href: `mailto:meg.meyers.388@gmail.com`,
  },
  // { icon: <SaveAltIcon />, label: 'Resumé', href: '#' }, // Add resume file download link
];

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function RightSocial({ styles, placement, color, background }) {
  const handleDownload = () => {
    alert('Coming soon....');
    // fetch(PDF).then((response) => {
    //   response.blob().then((blob) => {
    //     const fileURL = URL.createObjectURL(blob);
    //     //open(fileURL, '_blank')  //alternative to the a link opens embedded adobe viewer
    //     const alink = document.createElement('a');
    //     alink.href = fileURL;
    //     alink.download = 'meg-meyers-resume.pdf';
    //     alink.click();
    //   });
    // });
  };

  return (
    <Box style={styles}>
      {socialIcons.map(({ icon, label, href }, index) => (
        <StyledTooltip key={index} title={label} placement={placement} arrow>
          <Fab
            color={color}
            aria-label={label}
            href={href}
            sx={{
              marginTop: '15px',
              background: { background },
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            {icon}
          </Fab>
        </StyledTooltip>
      ))}
      <StyledTooltip
        title={'Resume'}
        onClick={handleDownload}
        placement={placement}
        arrow
      >
        <Fab
          color={color}
          aria-label={'Resume'}
          sx={{
            marginTop: '15px',
            background: { background },
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <SaveAltIcon />
        </Fab>
      </StyledTooltip>
    </Box>
  );
}

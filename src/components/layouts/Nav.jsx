import * as React from 'react';
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import * as Scroll from 'react-scroll';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import RightSocial from './RightSocial.jsx';
import { Box, Typography } from '@mui/material';

const Navigation = () => {
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    setOpenDrawer(false);
    await navigate('/');
    scroller.scrollTo(selector, {});
  };

  const styles = {
    rightSocials: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '3rem',
    },
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>
      {isMobile ? ( //mobile view
        <>
          {location !== 'contact' ? ( //mobile view home page
            <div>
              <Button onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size='large'
                  edge='start'
                  color='secondary'
                  aria-label='menu'
                  sx={{ position: 'fixed', left: '20px' }}
                />
              </Button>
              <Drawer
                anchor='left'
                open={openDrawer}
                disableRestoreFocus
                onClose={() => setOpenDrawer(false)}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: '35%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '1.5rem',
                    overflow: 'hidden',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                      fontFamily: 'Water Brush',
                    }}
                  >
                    M
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                      paddingTop: '1.9rem',
                      fontFamily: 'Water Brush',
                    }}
                  >
                    M
                  </Typography>
                </Box>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0',
                  }}
                >
                  <Divider variant='center' color='#ffffff' />
                  <li>
                    {' '}
                    <Button color='white'>
                      <ScrollLink
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Home
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color='white'>
                      <ScrollLink
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        About
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color='white'>
                      <ScrollLink
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Projects
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color='white'>
                      <ScrollLink
                        to='publications'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        onClick={() => setOpenDrawer(false)}
                      >
                        Publications
                      </ScrollLink>
                    </Button>
                  </li>
                  <li>
                    <Button color='white'>
                      <RouterLink
                        to='/contact'
                        onClick={() => setOpenDrawer(false)}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        Contact
                      </RouterLink>
                    </Button>
                  </li>
                  <li>
                    <RightSocial
                      styles={styles.rightSocials}
                      placement={'right'}
                      color={'secondary'}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          ) : (
            //mobile view contact page
            <div>
              <Button onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size='large'
                  edge='start'
                  color='secondary'
                  aria-label='menu'
                  sx={{ position: 'fixed', left: '20px' }}
                />
              </Button>
              <Drawer
                anchor='left'
                open={openDrawer}
                disableRestoreFocus
                onClose={() => setOpenDrawer(false)}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: '35%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '1.5rem',
                    overflow: 'hidden',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                      fontFamily: 'Water Brush',
                    }}
                  >
                    M
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '2rem',
                      paddingTop: '1.9rem',
                      fontFamily: 'Water Brush',
                    }}
                  >
                    M
                  </Typography>
                </Box>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0',
                  }}
                >
                  <Divider variant='center' color='#ffffff' />
                  <li>
                    {' '}
                    <Button
                      color='white'
                      onClick={() => goToPageAndScroll('home')}
                    >
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button
                      color='white'
                      onClick={() => goToPageAndScroll('about')}
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      color='white'
                      onClick={() => goToPageAndScroll('projects')}
                    >
                      Projects
                    </Button>
                  </li>
                  <li>
                    <Button
                      color='white'
                      onClick={() => goToPageAndScroll('publications')}
                    >
                      Publications
                    </Button>
                  </li>

                  <li>
                    <RightSocial
                      styles={styles.rightSocials}
                      placement={'right'}
                      color={'secondary'}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </>
      ) : (
        // desktop view
        <nav
          id='navigation'
          style={{ display: 'flex', alignItems: 'center', height: '100vh' }}
        >
          <ul
            style={{
              display: 'flex',
              rotate: '-90deg',
              transformOrigin: 'center',
              position: 'fixed',
              // top: '39.5rem',
              marginLeft: '20px',
              top: '50%',
              left: '-240px',
            }}
          >
            {location !== 'contact' ? (
              <>
                <li>
                  <Button color='white'>
                    <RouterLink
                      to='/contact'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Contact
                    </RouterLink>
                  </Button>
                </li>
                <li>
                  <Button color='white'>
                    <ScrollLink
                      to='publications'
                      spy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                    >
                      Publications
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color='white'>
                    <ScrollLink
                      to='projects'
                      spy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                    >
                      Projects
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color='white'>
                    <ScrollLink
                      to='about'
                      spy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                    >
                      About
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  {' '}
                  <Button color='white'>
                    <ScrollLink
                      to='home'
                      spy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                    >
                      Home
                    </ScrollLink>
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Button
                    color='white'
                    onClick={() => goToPageAndScroll('publications')}
                  >
                    Publications
                  </Button>
                </li>
                <li>
                  <Button
                    color='white'
                    onClick={() => goToPageAndScroll('projects')}
                  >
                    Projects
                  </Button>
                </li>
                <li>
                  <Button
                    color='white'
                    onClick={() => goToPageAndScroll('about')}
                  >
                    About
                  </Button>
                </li>
                <li>
                  <Button
                    color='white'
                    onClick={() => goToPageAndScroll('home')}
                  >
                    Home
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;

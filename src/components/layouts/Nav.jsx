import * as React from "react";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useMediaQuery } from "@mui/material";
import * as Scroll from "react-scroll";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import RightSocial from "./RightSocial.jsx";
import Logo from "../../assets/images/jaya-logo.png";

const Navigation = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -125,
      spy: true,
    });
  };

  const styles = {
    rightSocials: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "3rem",
    },
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      {isMobile ? (  //mobile view
        <>
          {location !== "Contact" ? ( //mobile view home page
            <div>
              <Button onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ position: "fixed", left: "20px" }}
                />
              </Button>
              <Drawer
                anchor="left"
                open={openDrawer}
                disableRestoreFocus
                
                onClose={() => setOpenDrawer(false)}
                sx={{
                 
                  "& .MuiDrawer-paper": {
                    width: "35%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "1.5rem",
                    overflow: "hidden"
                  },
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "120px", height: "auto" }}
                  />
                  <Divider variant="center" color="#ffffff" />
                  <li>
                    {" "}
                    <Button color="white">
                      <ScrollLink
                        to="home"
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
                    <Button color="white">
                      <ScrollLink
                        to="about"
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
                    <Button color="white">
                      <ScrollLink
                        to="projects"
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
                    <Button color="white">
                      <RouterLink
                        to="/Contact"
                        onClick={() => setOpenDrawer(false)}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Contact
                      </RouterLink>
                    </Button>
                  </li>
                  <li>
                    <RightSocial
                      styles={styles.rightSocials}
                      placement={"right"}
                      color={"secondary"}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          ) : (  //mobile view contact page
            <div>
              <Button onClick={() => setOpenDrawer(true)}>
                <MenuIcon
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ position: "fixed", left: "20px" }}
                />
              </Button>
              <Drawer
                anchor="left"
                open={openDrawer}
                disableRestoreFocus
                onClose={() => setOpenDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "35%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "1.5rem",
                    overflow: "hidden"
                  },
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "120px", height: "auto" }}
                  />
                  <Divider variant="center" color="#ffffff" />
                  <li>
                    {" "}
                    <Button
                      color="white"
                      onClick={() => goToPageAndScroll("home")}
                    >
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button
                      color="white"
                      onClick={() => goToPageAndScroll("about")}
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      color="white"
                      onClick={() => goToPageAndScroll("projects")}
                    >
                      Projects
                    </Button>
                  </li>
                  <li>
                    <Button color="white">
                      <RouterLink
                        to="/Contact"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Contact
                      </RouterLink>
                    </Button>
                  </li>
                  <li>
                    <RightSocial
                      styles={styles.rightSocials}
                      placement={"right"}
                      color={"secondary"}
                    />
                  </li>
                </ul>
              </Drawer>
            </div>
          )}
        </>
      ) : (  // d
        <nav id="navigation">
          <ul
            style={{
              display: "flex",
              rotate: "-90deg",
              transformOrigin: "left",
              position: "fixed",
              top: "36.5rem",
              marginLeft: "20px",
            }}
          >
            {location !== "Contact" ? (
              <>
                <li>
                  {" "}
                  <Button color="white">
                    <ScrollLink
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-75}
                      duration={500}
                    >
                      Home
                    </ScrollLink>
                  </Button>
                </li>
                <li>
                  <Button color="white">
                    <ScrollLink
                      to="about"
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
                  <Button color="white">
                    <ScrollLink
                      to="projects"
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
                  <Button color="white">
                    <RouterLink
                      to="/Contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Contact
                    </RouterLink>
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Button
                    color="white"
                    onClick={() => goToPageAndScroll("home")}
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    color="white"
                    onClick={() => goToPageAndScroll("about")}
                  >
                    About
                  </Button>
                </li>
                <li>
                  <Button
                    color="white"
                    onClick={() => goToPageAndScroll("projects")}
                  >
                    Projects
                  </Button>
                </li>
                <li>
                  <Button color="white">
                    <RouterLink
                      to="/Contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Contact
                    </RouterLink>
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

// import { Button } from "@mui/material";
// import React from "react";
// import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import * as Scroll from "react-scroll";

// const styles = {

// }

// const Navigation = () => {
//   const path = useLocation().pathname;
//   const location = path.split("/")[1];
//   const navigate = useNavigate();
//   const scroller = Scroll.scroller;

//   const goToPageAndScroll = async (selector) => {
//     await navigate("/");
//     await scroller.scrollTo(selector, {
//       duration: 500,
//       smooth: true,
//       offset: -75,
//       spy: true
//     });
//   };

//   return (
//       <nav id="navigation">
//         <ul
//         style={{
//           display: 'flex',
//           rotate: '-90deg',
//           transformOrigin: 'left',
//           position: 'fixed',
//           top: '36.5rem',
//           marginLeft: '20px',
//           }}>
//           {location !== "Contact" ? (
//             <>
//               <li>
//                 {" "}
//                 <Button color="white">
//                   <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
//                     Home
//                   </ScrollLink>
//                 </Button>
//               </li>
//               <li>
//                 <Button color="white">
//                   <ScrollLink to="about" spy={true} smooth={true} offset={-75} duration={500}>
//                     About
//                   </ScrollLink>
//                 </Button>
//               </li>
//               <li>
//               <Button color="white">
//                 <ScrollLink to="projects" spy={true} smooth={true} offset={-75} duration={500}>
//                   Projects
//                 </ScrollLink>
//               </Button>
//               </li>
//               <li>
//               <Button color="white">
//                 <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
//               </Button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 {" "}
//                 <Button color="white" onClick={() => goToPageAndScroll("home")}>Home</Button>
//               </li>
//               <li>
//                 <Button color="white" onClick={() => goToPageAndScroll("about")}>About</Button>
//               </li>
//               <li>
//                 <Button color="white" onClick={() => goToPageAndScroll("projects")}>Projects</Button>
//               </li>
//               <li>
//                 <Button color="white">
//                   <RouterLink to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</RouterLink>
//                 </Button>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//   );
// };

// export default Navigation;

// import { Box } from '@mui/system';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

// const navLinks = [
//     { label: 'Home', anchor: 'home' },
//     { label: 'About', anchor: 'about' },
//     { label: 'Projects', anchor: 'projects' },
// ];

// export default function Nav() {
//   const location = useLocation();
//   location.pathname === '/Contact'
//   return (
//     <Box
//       sx={{
// rotate: '-90deg',
// transformOrigin: 'left',
// position: 'fixed',
// top: '32rem',
// marginLeft: '30px',
//       }}
//     >
//       {navLinks.map(({ label, anchor }, index) => (
//         <ScrollLink
//           to={anchor}
//           smooth={true}
//           duration={700}
//           key={index}
//           style={{
//             color: '#ffffff',
//             fontSize: '1rem',
//             marginRight: '20px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           {label}
//         </ScrollLink>
//       ))}
//       <Link
//         to="/contact"
//         style={{
//           color: '#ffffff',
//           fontSize: '1rem',
//           marginRight: '20px',
//           textDecoration: 'none',
//           cursor: 'pointer',
//         }}>
//         Contact
//       </Link>
//     </Box>
//   );
// }

// import React from 'react';
// import { Box } from '@mui/system';
// import { Link } from 'react-router-dom'; // Correct import statement
// import Contact from '../../pages/Contact';

// // Ensure directing to contact
// const navLinks = [
//     { label: 'Home', anchor: '#home' },
//     { label: 'About', anchor: '#about' },
//     { label: 'Projects', anchor: '#projects' },
//     { label: 'Contact', anchor: '/contact' },
// ];

// export default function Nav() {
//   const handleClick = (event, anchor) => {
//     event.preventDefault();
//     const element = document.querySelector(anchor);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <Box sx={{
//       rotate: '-90deg',
//       transformOrigin: 'left',
//       position: 'fixed',
//       top: '32rem',
//       marginLeft: '30px'
//     }}>
//       {navLinks.map(({ label, anchor }, index) => (
//         <Link to={anchor} key={index} style={{ color: '#ffffff', fontSize: '1rem', marginRight: '20px', textDecoration: 'none' }} onClick={(event) => handleClick(event, anchor)}>
//           {label}
//         </Link>
//       ))}
//     </Box>
//   );
// }

// import React from 'react';
// import { Box } from '@mui/system';
// import { Link } from 'react-router-dom';
// import Contact from '../../pages/Contact'

// // Fix contact link, potentially change all to links and remove href
// const navLinks = [
//     { label: 'Home', anchor: '#home' },
//     { label: 'About', anchor: '#about' },
//     { label: 'Projects', anchor: '#projects' },
//     { label: 'Contact', anchor: <Link to={Contact}/> },
// ];

// // Slow down transition
// export default function Nav() {
//   const handleClick = (event, anchor) => {
//     event.preventDefault();
//     const element = document.querySelector(anchor);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <Box sx={{
//       rotate: '-90deg',
//       transformOrigin: 'left',
//       position: 'fixed',
//       top: '32rem',
//       marginLeft: '30px'
//     }}>
//       {navLinks.map(({ label, anchor }, index) => (
//         <a href={anchor} key={index} style={{ color: '#ffffff', fontSize: '1rem', marginRight: '20px', textDecoration: 'none' }} onClick={(event) => handleClick(event, anchor)}>
//           {label}
//         </a>
//       ))}
//     </Box>
//   );
// }

// import * as React from 'react';
// // import BottomNavigation from '@mui/material/BottomNavigation';
// // import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import { Link } from 'react-router-dom';
// import { Box } from '@mui/system';

// const navIcons = [
//     { label: 'Home', icon: <HomeIcon />, anchorTag: '#home' },
//     { label: 'About', icon: <PersonIcon />, anchorTag: '#about'  },
//     { label: 'Projects', icon: <LibraryBooksIcon />, anchorTag: '#projects'  },
//     { label: 'Contact', icon: <ContactsIcon /> },
// ]

// export default function Nav() {
//   // const [value, setValue] = React.useState(0);

//   return (
//       // <BottomNavigation
//       //   showLabels
//       //   value={value}
//       //   onChange={(event, newValue) => {
//       //     setValue(newValue);
//       //   }}
//       //   sx={{
//       //       background: 'transparent',
//       //       rotate: '-90deg',
//       //       transformOrigin: 'left',
//       //       position: 'fixed',
//       //       top: '35rem',
//       //       marginLeft: '30px'
//       //   }}
//       // >
//       //   {navIcons.map(({ label }, index ) => (
//       //       <BottomNavigationAction
//       //       key={index}
//       //       label={label}
//       //       sx={{
//       //         color: 'white',
//       //         '.MuiBottomNavigationAction-label': {
//       //           fontSize: '1rem',
//       //           padding: '0.45rem'
//       //         },
//       //       }}
//       //       />))}
//       // </BottomNavigation>
//     <Box>
//       {navIcons.map(({ label, anchorTag }, index ) => (
//             <Link
//             href='#about'
//             key={index}
//             sx={{
//               color: '#ffffff',
//               fontSize: '1rem'
//             }}>
//               {label}
//             </Link>
//       ))};
//     </Box>
// )}

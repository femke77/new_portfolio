import { Outlet } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from '@mui/material/styles';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/layouts/Layout';
import { useEffect } from 'react';
import { registerSW } from 'virtual:pwa-register';



const theme = createTheme({
  palette: {
    // background: {
    //   default: '#EDBAAB',
    // },
    primary: {
      main: '#000000',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif', 'Water Brush', 'serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 900,
      lg: 1024,
      xl: 1200,
    },
  },
});

function App() {

  useEffect(() => {
    const updateSW = registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('SW - Need refresh');
        if (confirm('A new version is available. Do you want to reload the page?')) {
          updateSW(true); // Force update
        }
      },
      onOfflineReady() {
        console.log('SW - Offline ready');
      },
      onRegistered(registration) {
        console.log('SW - Registered');
        
        // Check for updates every minute
        setInterval(() => {
          registration?.update();
        }, 60000);
      },
      onRegisterError(error) {
        console.log('SW - Registration error:', error);
      },
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
            <Outlet />   
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

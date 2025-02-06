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
    console.log('Setting up SW registration...');

    const updateSW = registerSW({
      immediate: true,
      // using autoUpdate so the below code, onNeedRefresh, isn't running. Might switch to prompt. 
      onNeedRefresh() {
        console.log('Need refresh callback triggered!');
        if (
          confirm('A new version is available. Do you want to reload the page?')
        ) {
          console.log('User confirmed update');
          updateSW(true).catch(console.error);
        }
      },
      onOfflineReady() {
        console.log('SW - Offline ready');
      },
      onRegistered(registration) {
        console.log('SW Registration successful:', registration);
        setInterval(() => {
          console.log('Checking for SW updates...');
          registration?.update().catch(console.error);
        }, 21600000); // 6 hours
      },
      onRegisterError(error) {
        console.error('SW registration failed:', error);
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

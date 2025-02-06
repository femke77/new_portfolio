import { Outlet } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from '@mui/material/styles';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/layouts/Layout';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // This will be called when a new version of the SW is available
    console.log('New version available!');
    
    // Prompt the user to refresh the page
    if (confirm('A new version is available. Do you want to reload the page?')) {
      updateSW(); // Activates the new service worker
      window.location.reload(); // Forces the page to reload
    }
  },
  onOfflineReady() {
    console.log('The app is ready to work offline.');
  },
});

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

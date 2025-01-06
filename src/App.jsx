import { Outlet } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/layouts/Layout';

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
          <main>
            <Outlet />
          </main>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

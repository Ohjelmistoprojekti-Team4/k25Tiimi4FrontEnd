import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { ShopContextProvider } from './context/Shop-context';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// font settings
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      marginTop: '3rem',
      fontSize: '3.8rem',
      letterSpacing: 2.5,
      fontFamily: 'Notable',
      textShadow: '3px 3px 4px #1b1b1b2c',
      textAlign: 'center',
    },
    home_h1: {
      marginTop: '2rem',
      fontSize: '4.8rem',
      letterSpacing: 2.5,
      fontFamily: 'Notable',
      textShadow: '3px 3px 4px #1b1b1b2c',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.3rem',
      textTransform: 'uppercase',
      fontWeight: 600,
      paddingLeft: 10,
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1rem',
    },
    link: {
      fontSize: '1.2rem',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e6d8c6', // normaali
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b19072', // hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccaa80', // 🔸 fokuksessa
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#b19072',
          '&.Mui-focused': {
            color: '#ccaa80',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <>
        
        <ThemeProvider theme={theme}>
          <ShopContextProvider>
          <Navbar />
          <Outlet />
          </ShopContextProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
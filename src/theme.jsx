import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';


let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#e9ecec',
          paper: '#dcd0d0',
        },
      },
    });


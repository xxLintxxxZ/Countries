import React from "react";
import { AppBar } from '@mui/material';
import { Button } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const Home = () => {
  return (

    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative"> 
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Country
        </Typography>
        <Typography variant="h6" color="inherit" noWrap>
          Country
        </Typography>
      </Toolbar>
    </AppBar>

    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
           WELCOME TO THE COUNTRIES TRIVIA
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Random country flags and capital.
            don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
     
    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        ~ Simplicity is the ultimate sophistication ~ 
      </Typography>
      
    </Box>
    {/* End footer */}
  </ThemeProvider>
  );
                }

export default Home;
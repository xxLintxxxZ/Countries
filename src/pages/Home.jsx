import React from "react";
import { Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#8247E6",
    },
    secondary: {
      main: "#4c94f6",
    },
    background: {
      default: "#fff",
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
            bgcolor: "background.paper",
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
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Random country's flags and their capital. don&apos;t simply skip
              over it entirely.
            </Typography>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Coat_of_arms_of_Saint_Pierre_and_Miquelon.svg/400px-Coat_of_arms_of_Saint_Pierre_and_Miquelon.svg.png"
              width="200"
              height="247"
            />

            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Typography variant="h4" align="center" color="#ff4081" paragraph>
                Do you know that?
              </Typography>
           
            <Box sx = {{bgcolor : '#8545F9', color : "white" }}>
                Nepal's flag is the world’s only non-quadrilateral national
                flag. Go and search for it under the region 'Asia'.
              </Box>
              
              <br/>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
};

export default Home;

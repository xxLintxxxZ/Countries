import React, {useState, useEffect} from 'react';
import { AppBar } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


 {/* countryData*/}

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Album(Props) {

  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("asia");

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/region/" + countryTitle)
    .then((res) => res.json())
    .then((countryData) => {
    console.log(countryData);
    setcountryData(countryData)
      });
    
  }, [countryTitle]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

       {/* Here comes the card     
          capital={countryData?.[0]?.capital}
                  img={countryData?.[0]?.flags.png} */  }
       <h2>There are {countryData.length} countries in {countryTitle} </h2>
          <Grid container spacing={4}>
            {countryData && countryData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor : '#9CD6E2' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      p: '10.25%',
                    }}
                    image={card?.flags.png}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                  {card?.name.common}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
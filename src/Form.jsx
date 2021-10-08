import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Form(props) {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#eadada",
      },
      secondary: {
        main: "#eadada",
      },
      background: {
        paper: "#e3f2fd",
      },
    },
  });

  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("australia");

  // fetch("https://restcountries.com/v3.1/name/" + countryTitle)
  // .then((res) => res.json())
  // .then((countryData) => {
  //   console.log(countryData);
  //   setcountryData(countryData);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + countryTitle)
      .then((res) => res.json())
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);
      });
  }, [countryTitle]);

  const handleSubmit = (e) => {
    console.log("Form - handleSubmit - countryTitle", countryTitle);
    e.preventDefault();
    props.handleSubmit(countryTitle);
    setcountryTitle("");
  };

  const handleChange = (e) => {
    console.log("handleChange clicked");
    const title = e.target.value;
    setcountryTitle(title);
  };

  //onSubmit={handleSubmit}
  //<button value= "<- Find Random Country Flag & Capital" />

  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            ></Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              <Box>
                <label htmlFor="countryTitle"> Search a Country : </label>
                <input
                  id="countryTitle"
                  type="text"
                  value={countryTitle}
                  onChange={handleChange}
                />
              </Box>
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            ></Typography>

              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Country
                  name={countryData?.[0]?.name.common}
                  capital={countryData?.[0]?.capital}
                  img={countryData?.[0]?.flags.png}
                />
              </Stack>
            
          </Container>
        </Box>
      </main>
    </>
  );
}

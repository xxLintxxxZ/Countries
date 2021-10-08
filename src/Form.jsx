import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia, Card, CardContent } from "@mui/material";

export default function Form(props) {

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: '#eadada',
      },
      secondary: {
        main: '#eadada',
      },
      background: {
        default: '#efbebe',
          paper: '#e2efef'
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
    <ThemeProvider theme={theme}>
      {/* Hero unit */}
      <Container maxWidth="sm" >
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 1,
            m: 1
          }}
        >
          <Box sx={{ p: 1 }}>
            <label htmlFor="countryTitle"> Search a Country : </label>
            <input
              id="countryTitle"
              type="text"
              value={countryTitle}
              onChange={handleChange}
            />
          </Box>
      </Box>
          <Box sx= {{ justifyContent: "center" }}>
            <Country sx= {{ justifyContent: "center", pl:2, pb:2, border: 3 }}
            name={countryData?.[0]?.name.common}
            capital={countryData?.[0]?.capital}
            img={countryData?.[0]?.flags.png}
          />
        </Box>
      
        </Container>
    </ThemeProvider>
  );
}



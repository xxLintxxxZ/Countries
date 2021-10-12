import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";




export default function Form(props) {

  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("australia");



  useEffect(() => {
    fetch("https://restcountries.com/v2/name/" + countryTitle)
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

  
  return (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
        {/* Hero unit */}
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            ></Typography>

              <Stack
                sx={{ pt: 2}}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
              <Typography
              variant="h6"
              align="center"
              color="black"
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
                <Country
                  name={countryData?.[0]?.name}
                  img={countryData?.[0]?.flags.png}
                  currency= {countryData?.[0]?.currencies?.[0].code}
                  symbol= {countryData?.[0]?.currencies?.[0].symbol}
                />
              </Stack>
              </Box>
  
  );
}

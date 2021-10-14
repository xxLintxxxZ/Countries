import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";


function Form(props) {

  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("Australia");

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

  function commarize() {
    // Alter numbers larger than 1k
    if (this >= 1e3) {
      var units = ["K", "M", "B", "T"];
      
      // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
      let unit = Math.floor(((this).toFixed(0).length - 1) / 3) * 3
      // Calculate the remainder
      var num = (this / ('1e'+unit)).toFixed(2)
      var unitname = units[Math.floor(unit / 3) - 1]
      
      // output number remainder + unitname
      return num + unitname
    }
    
    // return formatted original number
    return this.toLocaleString()
  }
  
  // Add method to prototype. this allows you to use this function on numbers and strings directly
  Number.prototype.commarize = commarize
  String.prototype.commarize = commarize

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
                  capital = {countryData?.[0]?.capital}
                  area={countryData?.[0]?.area.toLocaleString()}
                  population={countryData?.[0]?.population.commarize()}
                />
              </Stack>
              </Box>
  
  );
}

export default Form
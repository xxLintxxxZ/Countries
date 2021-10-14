import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { BrowserRouter as Router, useParams } from "react-router-dom";

export default function One(props) {
  const [countryData, setcountryData] = useState([]);

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let { den } = useParams();

  {/*<h3> Testing: {den}</h3>*/}
  
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
  

  console.log(den);

  useEffect(() => {
    fetch("https://restcountries.com/v2/name/" + den)
      .then((res) => res.json())
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Stack
          sx={{ pt: 2 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Country
            name={countryData?.[0]?.name}
            img={countryData?.[0]?.flags.png}
            currency={countryData?.[0]?.currencies?.[0].code}
            symbol={countryData?.[0]?.currencies?.[0].symbol}
            capital = {countryData?.[0]?.capital}
            area={countryData?.[0]?.area.toLocaleString()}
            population={countryData?.[0]?.population.commarize()}
          />
        </Stack>
      </Box>
      <div>
     
      </div>
    </>
  );
}

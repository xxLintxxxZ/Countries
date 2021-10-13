import React, { useState, useEffect } from "react";
import Country from "./CountryFact";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, useParams } from "react-router-dom";

export default function One(props) {
  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState("australia");

  const [currency, setCurrency] = useState(null);
  const coindeskURL = "https://restcountries.com/v2/name/";

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let { den } = useParams();

  console.log(den);

  useEffect(() => {
    fetch("https://restcountries.com/v2/name/" + den)
      .then((res) => res.json())
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);
      });
  }, [countryTitle]);

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
          />
        </Stack>
      </Box>
      <div>
        <h3> Testing: {den}</h3>
      </div>
    </>
  );
}

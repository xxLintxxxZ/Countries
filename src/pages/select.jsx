import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { ImageList } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { createTheme } from "@mui/material";
import { Link} from "react-router-dom";
import One from "./pages/One";

   {/* Something wrong with syntax? vercel not loading */}

   {/* Select page not loading why */}
   
const currencies = [
  {
    value: "africa",
    label: "africa",
  },
  {
    value: "americas",
    label: "americas",
  },
  {
    value: "asia",
    label: "asia",
  },
  {
    value: "europe",
    label: "europe",
  },
  {
    value: "oceania",
    label: "oceania",
  },
];


export default function Select() {
  const [currency, setCurrency] = useState("europe");
  const [countryData, setcountryData] = useState([]);
  const [countryTitle, setcountryTitle] = useState(currency);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    setcountryTitle(event.target.value)
  };

  console.log (currency)

 console.log(countryTitle)
  
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/region/" + currency)
        .then((res) => res.json())
        .then((countryData) => {
          console.log(countryData);
          setcountryData(countryData);
        });
    }, [currency]);
  
    const theme = createTheme({
      palette: {
          type: 'light',
        
          background: {
            paper: '#e3f2fd'
          },
        },
      });

  return (
    <Stack
    sx={{ pt: 4}}
    direction="row"
    spacing={2}
    justifyContent="center"
  >
            <ImageList sx={{ width: 600, height: 450 }}>
            { countryData && countryData.map((item, index) => (
              <ImageListItem key={index} sx= {{ border :2, p:2}}>
                <img sx= {{ border :2}}
                  src={`${item?.flags.png}?w=248&fit=crop&auto=format`}
                  srcSet={`${item?.flags.png}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.capital}
                  loading="lazy"
                />
                <ImageListItemBar
                  subtitle={<span> Name: {item?.name.common}</span>}
                  subtitle={<span>Top-level domain: {item?.tld}</span>}
                  position="below"
                />
                
              </ImageListItem>
            ))}
          </ImageList>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 6, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select the region"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ bgcolor: "background.paper", p: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        There are {countryData.length} countries in {countryTitle} 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Ever tried to guess a particular webpage is from which country? 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         <br/>
         ~ You can find out from their Top Level Domain ~
         
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Click the names of the country to find more information
        </Typography>
      </Box>

    </Box>
    </Stack>
  );
}
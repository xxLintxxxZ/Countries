import * as React from 'react';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ConstructionOutlined } from '@mui/icons-material';


export default function Playground() {

//======= From API =======
const [countryData, setcountryData] = useState([]);
const [countryTitle, setcountryTitle] = useState("europe");

useEffect(() => {
  
    fetch("https://restcountries.com/v3.1/region/" + countryTitle)
    .then((res) => res.json())
    .then((countryData) => {
    console.log(countryData);
    setcountryData(countryData)
      });
    
  }, [countryTitle]);


//======= From API ========


//   const defaultProps = {
//     options: countryData,
//     getOptionLabel: (option) => option.name,
//   };

//   const flatProps = {
//     options: countryData.map((option) => option.name).map(option=>option.common),
//   };

//   console.log(flatProps.options)

//   const [value, setValue] = React.useState(null);
//console.log(countryData.name)

console.log(countryData?.[0]?.name)
// console.log(countryData[1].name)
// console.log(countryData[2].name)
// const test = countryData.common.name.map (obj => {let robj ={} 
// robj [obj.key] = obj.value 
// return robj})

// console.log (robj)


const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map);

  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
  />

  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Fairy Godmother', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
 
  
];

// const countryGabra= [
//     { name: 'Europe', year: 1994 },
//     { name: 'Asia', year: 1972 },
//     { name: 'Austria', year: 1974 },
   
//   ];
  
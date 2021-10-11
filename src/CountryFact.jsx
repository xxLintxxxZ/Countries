import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { createTheme} from '@mui/material';
import { Box } from "@mui/system";

function Country(props) {
  console.log("Props ", props);
 
  const theme = createTheme({
    palette: {
        type: 'light',
      
        background: {
          paper: '#e3f2fd'
        },
      },
    });
  return (
    <Box >
      <Card sx={{ maxWidth: 345, border:1, p:2, bgcolor: "lightblue" }} >
      <CardHeader
         sx={{ bgcolor: "lightblue"}} 
        title= "Flag"
        subheader="September 14, 2016"
      />  
        <CardMedia
          component="img"
          image={props.img}
          alt="country"
        />
        <CardContent  >
            Name : {props.name} Capital : {props.capital}
        </CardContent>
        <CardContent  >
            Name : {props.name} Capital : {props.capital}
        </CardContent>
      </Card>
  </Box>
  );
}

//? export the component
export default Country;

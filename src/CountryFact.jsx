import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";



function Country(props) {
  console.log("Props ", props);
 

  return (
   
      <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          image={props.img}
          alt="green iguana"
        />
        <br/>
        <CardContent>
        
            Name : {props.name} Capital : {props.capital}

        </CardContent>
      </Card>
  
  );
}

//? export the component
export default Country;

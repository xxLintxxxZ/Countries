import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import { createTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Typography
 } from "@mui/material";
function Country(props) {
  console.log("Props ", props);

  const theme = createTheme({
    palette: {
      type: "light",

      background: {
        paper: "#e3f2fd",
      },
    },
  });
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          border: 1,
          p: 2,
          bgcolor: "#00897B",
          color: "white",
        }}
      >
        <CardHeader
          sx={{ bgcolor: "#00897B" }}
          title="Flag"
          subheader=""
        />
        <CardMedia component="img" image={props.img} alt="country" />
        <CardContent>
          Name : {props.name}
          <Typography>
            {" "}
            Currency : {props.currency}, Symbol : {props.symbol}
          </Typography>
          <Typography>Capital : {props.capital}</Typography>
          <Typography>
            Area : {props.area} km<sup>2</sup>
          </Typography>
          <Typography>Population : {props.population}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

//? export the component
export default Country;

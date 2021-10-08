import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState,useEffect } from 'react';
import { Box } from "@mui/material";
import { Container } from "@mui/material";

export default function TitlebarBelowImageList(Props) {

    const [countryData, setcountryData] = useState([]);
    const [countryTitle, setcountryTitle] = useState("asia");
  
  
    useEffect(() => {
  
      fetch("https://restcountries.com/v3.1/region/" + countryTitle)
      .then((res) => res.json())
      .then((countryData) => {
      console.log(countryData);
      setcountryData(countryData)
        });
      
    }, [countryTitle]);
    

    const count2 = [countryData];
    console.log(count2)

        return (
          <>
          <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            Hello world!
          <h2>There are {countryData.length} countries in {countryTitle} </h2>
            <ImageList sx={{ width: 600, height: 450 }}>
            { countryData && countryData.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item?.flags.png}?w=248&fit=crop&auto=format`}
                  srcSet={`${item?.flags.png}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.capital}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item?.name.common}
                  subtitle={<span> Capital : {item?.capital } Population: {item?.population}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
          </Container>
        </Box>
      </main>

          </>
        );
      }


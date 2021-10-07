import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState,useEffect } from 'react';
import {Component} from "react"


export default function TitlebarBelowImageList(Props) {

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
    

    const count2 = [countryData];
    console.log(count2)

        return (
          <>
          Hello world!
          <h2>There are {countryData.length} countries in Europe. </h2>
            <ImageList sx={{ width: 500, height: 450 }}>
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
          </>
        );
      }


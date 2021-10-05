import React, { useState, useEffect } from 'react';
import Country from './CountryFact';

function Form(props) {


  const [countryData, setcountryData] = useState("");
  const [countryTitle, setcountryTitle] = useState("australia");

  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + countryTitle)
      .then((res) => res.json())
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);

        console.log(countryData[0].capital);
        console.log(countryData[0].maps.googleMaps);
        console.log(countryData[0].flags.png);
      });
  }, [countryTitle]);

  
  const handleSubmit = (e) => {
    console.log('Form - handleSubmit - countryTitle', countryTitle);
    e.preventDefault();
    props.handleSubmit(countryTitle);
    setcountryTitle('');
  };

  const handleChange = (e) => {
    console.log('handleChange clicked');
    const title = e.target.value;
    setcountryTitle(title);
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <br/> <br/>
        <label htmlFor="countryTitle">Country: </label>
        <input
          id="countryTitle"
          type="text"
          value={countryTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Find Random Trivia" />
        <Country name = {countryData?.[0]?.capital} img = {countryData?.[0]?.flags.png}/>
      </form>
      </div>
    </>
  );
}

export default Form;

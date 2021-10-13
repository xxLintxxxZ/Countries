import React from "react";
import { useState, useEffect } from "react"; 

export default function Quote() {
    const [data, setData] = useState(null);
  
    async function updateQuote() {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data  = await response.json();
        setData(data);
      } catch (error) {
        // If the API request failed, log the error to console and update state
        console.error(error);
        setData ("This page has failed");
      }
    }
  
    // Run `updateQuote` once when component mounts
    useEffect(() => {
      updateQuote();
    }, []);
  
    // Do not render until the first quote is loaded
    if (!data) return null;
  
    return (
      <div>
        <p>~ {data.content} ~</p>
        <h3> - {data.author}</h3>
      </div>
    );
  }
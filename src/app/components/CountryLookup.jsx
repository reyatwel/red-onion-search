"use client";

import { useState, useEffect } from "react";

export default function CountryLookup() {
    const [country, setCountry] = useState("Philippines");

    useEffect(() => {
      fetch("http://ip-api.com/json/")
      .then((response) => response.json())
      .then((data) => setCountry(data.country))
      .catch((error) => console.log(error));  
    }, []);

  return (
    <div>
      {country}
    </div>
  )
}

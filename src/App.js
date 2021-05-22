import React, { useState, useEffect } from 'react';
import InputForm from "./components/InputForm"
import Venue from "./components/Venue"
import Weather from './components/Weather';
require("dotenv").config();

function App() {
  const [venues, setVenues] = useState([]);
  const [weather, setWeather] = useState({});
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchTerm = (term) => {
    setSearchTerm(term)
  }

  useEffect(() => {
    const getVenues = async () => {

      const urlToFetch = `${process.env.url}${searchTerm}&limit=5&client_id=${process.env.clientId}&client_secret=${process.env.clientSecret}&v=20210101`;

      try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
          const jsonResponse = await response.json();
          const venue = jsonResponse.response.groups[0].items.map(item => item.venue);
          setVenues(venue);

        }
      } catch (error) {
        console.log(error);
      }
    };

    const getForecast = async () => {
      const urlToFetch = `${process.env.weatherUrl}?&q=${searchTerm}&APPID=${process.env.openWeatherKey}`;

      try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
          const jsonResponse = await response.json();
          setWeather(jsonResponse)

        }
      } catch (error) {
        console.log(error);
      }
    };
    getVenues();
    getForecast()
  }, [searchTerm])
  // AJAX functions



  return (
    <div className="App">
      <InputForm handleSearchTerm={handleSearchTerm} />
      <Weather weather={weather} />
      <Venue venues={venues} />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import InputForm from "./components/InputForm"
import Venue from "./components/Venue"
import Weather from './components/Weather';


function App() {
  const [venues, setVenues] = useState([]);
  const [weather, setWeather] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  // Foursquare API Info
  const clientId = 'PU3IY1PZEOOANTPSHKNMS5HFSMEGEQ1IAVJYGYM4YVZP3NGD';
  const clientSecret = '0V21IXU0EETE3SZJGGCP4T4R13NUTBJ0LMI5WQY45IMDPEKY';
  const url = 'https://api.foursquare.com/v2/venues/explore?near=';

  // OpenWeather Info
  const openWeatherKey = '45dc1d2e92f646d108fe518401d1e210';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const handleSearchTerm = (term) => {
    setSearchTerm(term)
  }

  useEffect(() => {
    const getVenues = async () => {

      const urlToFetch = `${url}${searchTerm}&limit=5&client_id=${clientId}&client_secret=${clientSecret}&v=20210101`;

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
      const urlToFetch = `${weatherUrl}?&q=${searchTerm}&APPID=${openWeatherKey}`;

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

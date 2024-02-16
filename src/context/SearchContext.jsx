import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const SearchContext = createContext();
const SearchProvider = ({children}) => {
    const [isDay, setIsDay] = useState(true); // State to track day or night
    const [cityData, setCityData] = useState({
      dhaka: {},
      chittagong: {},
      mymenshingh: {},
      sylhet: {},
      rajshahi: {},
      khulna: {},
      rangpur: {},
    });
  
    useEffect(() => {
      const checkTime = async () => {
        const date = new Date();
        const hours = date.getHours();
        setIsDay(hours >= 6 && hours < 18);
  
        const cities = [
          "Dhaka",
          "Chittagong",
          "Mymensingh",
          "Sylhet",
          "Rajshahi",
          "Khulna",
          "Rangpur",
        ];
        const requests = cities.map((city) =>
          axios.get(
            `http://api.weatherapi.com/v1/current.json?key=fbf762b1ae3641d59fe142312241502&q=${city}&aqi=no`
          )
        );
  
        try {
          const responses = await Promise.all(requests);
          const cityWeatherData = {};
          responses.forEach((response, index) => {
            cityWeatherData[cities[index].toLowerCase()] = response.data;
          });
          setCityData(cityWeatherData);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      const interval = setInterval(checkTime, 60000);
      checkTime();
  
      return () => clearInterval(interval);
    }, []);
    const info = {
        isDay,
        cityData
    }
    return <SearchContext.Provider value={info}>{children}</SearchContext.Provider>
};

export { SearchProvider, SearchContext };

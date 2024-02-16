import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useOutletContext } from "react-router-dom";
import Clock from "../../components/Clock/Clock";

const Home = () => {
  const search = useOutletContext();
  const [city, setCity] = useState("Dhaka");
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [todayForecast, setForecast] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    setCity(search);
  }, [search]);

  useEffect(() => {
    const currentWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=fbf762b1ae3641d59fe142312241502&q=${city}&aqi=no`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching current weather:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const data = await currentWeather();
      setCurrentWeatherData(data);
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    const forecast = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=fbf762b1ae3641d59fe142312241502&q=${city}&aqi=no`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching current weather:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const data = await forecast();
      setForecast(data);
    };

    fetchData();
  }, [city]);

    // console.log(todayForecast.forecast.forecastday[0].day.maxtemp_c);
  return (
    <div>
      <div
        className=" lg:w-2/4 rounded-lg py-5 px-3"
        style={{
          backgroundImage: `url('https://assets.msn.com/weathermapdata/1/static/images/webps/v1.0/Sunny.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-gray-200">
          <h5 className=" text-white">Current weather</h5>
          <Clock />
        </div>
        {/* <p>{currentWeatherData?.location?.name}</p> */}
        <div className=" flex items-center gap-1">
          <img
            src={currentWeatherData?.current?.condition?.icon}
            alt=""
            className=" w-32"
          />
          <p className=" text-white text-7xl">{currentWeatherData?.current?.temp_c}<sup className=" text-5xl font-thin">°C</sup></p>
          <div className=" ml-7">
          <p className=" text-2xl text-white">{currentWeatherData?.current?.condition?.text}</p>
          <p className=" text-sm text-gray-200"> <span>Feels like : </span>{currentWeatherData?.current?.feelslike_c}<span className=" text-xl text-white">°C</span></p>
          </div>
        </div>
          <p className=" text-gray-200">There will be mostly {currentWeatherData?.current?.condition?.text} skies. The high will be {todayForecast?.forecast?.forecastday[0]?.day.maxtemp_c} °C .
          </p>
      </div>
    </div>
  );
};

export default Home;

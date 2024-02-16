import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Clock from "../../components/Clock/Clock";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import MapToDisplay from "../../components/Map/Map";
import Forcast from "./Forecast/Forcast";
import HeroBlog from "../../components/HeroBlog/HeroBlog";
import Banner from "./Banner/Banner";

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
          `https://api.weatherapi.com/v1/current.json?key=fbf762b1ae3641d59fe142312241502&q=${city}&aqi=no`
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
          `https://api.weatherapi.com/v1/forecast.json?key=fbf762b1ae3641d59fe142312241502&q=${city}&days=5&aqi=no`
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

//   console.log(todayForecast?.forecast?.forecastday[0]);
  return (
    <div data-aos="fade-right" className=" my-7">
      <div className=" flex flex-col lg:flex-row gap-5">
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
            <p className=" text-gray-400">
              {currentWeatherData?.location?.name}
            </p>
            <Clock />
          </div>
          <div className=" flex flex-col md:flex-row items-center gap-1">
            <img
              src={currentWeatherData?.current?.condition?.icon}
              alt=""
              className=" w-32"
            />
            <p className=" text-gray-200 text-7xl">
              {currentWeatherData?.current?.temp_c}
              <sup className=" text-5xl font-thin">°C</sup>
            </p>
            <div className=" ml-7">
              <p className=" text-2xl text-white">
                {currentWeatherData?.current?.condition?.text}
              </p>
              <p className=" text-sm text-gray-200">
                {" "}
                <span>Feels like : </span>
                {currentWeatherData?.current?.feelslike_c}
                <span className=" text-xl text-white">°C</span>
              </p>
            </div>
          </div>
          <p className=" text-gray-200 my-5">
            There will be mostly {currentWeatherData?.current?.condition?.text}{" "}
            skies. The high will be{" "}
            {todayForecast?.forecast?.forecastday[0]?.day.maxtemp_c} °C .
          </p>
          <div className=" flex items-center my-4 gap-5">
            <div className=" ">
              <h6 className=" flex items-center gap-1 text-gray-300">
                Sunrise <AiOutlineExclamationCircle />
              </h6>
              <p className=" text-gray-50">
                {todayForecast?.forecast?.forecastday[0]?.astro?.sunrise}
              </p>
            </div>
            <div className=" ">
              <h6 className=" flex items-center gap-1 text-gray-300">
                Sunrise <AiOutlineExclamationCircle />
              </h6>
              <p className=" text-gray-50">
                {todayForecast?.forecast?.forecastday[0]?.astro?.sunrise}
              </p>
            </div>
            <div className=" ">
              <h6 className=" flex items-center gap-1 text-gray-300">
                Moonrise <AiOutlineExclamationCircle />
              </h6>
              <p className=" text-gray-50">
                {todayForecast?.forecast?.forecastday[0]?.astro?.moonrise}
              </p>
            </div>
          </div>
        </div>
        {/* map */}
        <div data-aos="fade-left" className=" border-4 lg:w-2/4 rounded-lg">
          <MapToDisplay />
        </div>
      </div>
      <div>
        <Forcast todayForecast={todayForecast} />
      </div>
      <div>
        <HeroBlog/>
        <Banner/>
      </div>
    </div>
  );
};

export default Home;

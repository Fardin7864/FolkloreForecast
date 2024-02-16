import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import PopulerCarousel from "./PopulerCarousel";
import axios from "axios";

const Navbar = () => {
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

  // console.log(cityData)

  return (
    <div className={`w-full ${isDay ? "bg-[#325b8f]" : "bg-[#515f6f]"}`}>
      <div className="max-w-7xl mx-auto flex w-full items-center">
        <form className="py-3 flex flex-row items-center lg:w-1/4">
          <input
            type="text"
            placeholder="Search for City"
            className="text-black rounded-full pl-5 text-base px-3 py-1 w-full font-normal"
          />
          <button type="submit" className="relative -left-7">
            <GoSearch />
          </button>
        </form>
        <div className=" w-3/4">
          <PopulerCarousel citys={cityData} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

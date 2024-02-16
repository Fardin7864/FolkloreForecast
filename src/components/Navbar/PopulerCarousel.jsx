import React, { useState } from "react";

const PopulerCarousel = ({ citys }) => {
  const [isCelsius, setIsCelsius] = useState(true); // State to track temperature unit

  const { dhaka, chittagong, mymenshingh, sylhet, rajshahi, rangpur, khulna } =
    citys;
  // console.log(citys.dhaka);
  const items = [
    dhaka,
    chittagong,
    mymenshingh,
    sylhet,
    rajshahi,
    rangpur,
    khulna,
  ];
  const toggleTemperatureUnit = () => {
    // Toggle between Celsius and Fahrenheit
    setIsCelsius((prevState) => !prevState); 
  };

  const getTemperature = (temp_c, temp_f) => {
    return isCelsius ? temp_c : temp_f;
  };

  const temperatureUnit = isCelsius ? "°C" : "°F";

  return (
    <div className="carousel w-full flex justify-between">
      <div className="flex gap-1 bg-[#235191]">

        <div className=" flex items-center gap-4 px-4 text-gray-300 text-sm bg-[#325b8f]">
          <p>Populer</p>
        </div>

        <div className=" flex items-center px-4 text-white bg-[#325b8f] text-sm">
          <p>{dhaka.location?.name}</p>
          <div className=" flex items-center gap-1">
          <img src={dhaka.current?.condition?.icon} alt="" className=" w-10" />
          <p>
            {getTemperature(dhaka.current?.temp_c, dhaka.current?.temp_f)}
            {temperatureUnit}
          </p>
          </div>
        </div>

        <div className=" flex items-center text-white px-4 bg-[#325b8f] text-sm">
          <p>{chittagong?.location?.name}</p>
          <div className=" flex items-center gap-1">
          <img src={chittagong?.current?.condition?.icon} alt="" className=" w-10" />
          <p>
            {getTemperature(
              chittagong?.current?.temp_c,
              chittagong?.current?.temp_f
            )}
            {temperatureUnit}
          </p>
          </div>
        </div>

        <div className=" flex items-center text-white px-4 bg-[#325b8f] text-sm">
          <p>{sylhet?.location?.name}</p>
          <div className=" flex items-center gap-1">
          <img src={sylhet?.current?.condition?.icon} alt="" className=" w-10" />
          <p>
            {getTemperature(sylhet?.current?.temp_c, sylhet?.current?.temp_f)}
            {temperatureUnit}
          </p>
          </div>
        </div>

        <div className=" flex items-center text-white px-4 bg-[#325b8f] text-sm">
          <p>{rajshahi?.location?.name}</p>
          <div className=" flex items-center gap-1">
          <img src={rajshahi?.current?.condition?.icon} alt="" className=" w-10" />
          <p>
            {getTemperature(rajshahi?.current?.temp_c, rajshahi?.current?.temp_f)}
            {temperatureUnit}
          </p>
          </div>
        </div>
        <div className=" flex items-center text-white px-4 bg-[#325b8f] text-sm">
          {/* TODO BUTTON */}
        </div>

      </div>
      <button className=" btn bg-[#235191] border-none text-white text-lg" onClick={toggleTemperatureUnit}>{isCelsius ? "°C" : "°F"}</button>
    </div>
  );
};

export default PopulerCarousel;

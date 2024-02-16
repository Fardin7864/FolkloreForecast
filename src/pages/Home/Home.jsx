import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useOutletContext } from "react-router-dom";


const Home = () => {
    const search =useOutletContext()
    console.log(search)
    const {isDay, cityData} = useContext(SearchContext)
    console.log(isDay, cityData)
    const [city, setCity] = useState('Dhaka');

    // useEffect(() => { 
    //     const async currentWeather = () => { 
    //         const data = await axios.get("http://api.weatherapi.com/v1/current.json?key=fbf762b1ae3641d59fe142312241502&q=Bangladesh&aqi=no")
    //      }
    //  },[])
    return (
        <div >
            <h3>this is home</h3>
        </div>
    );
};

export default Home;
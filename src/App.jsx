
import {  useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {

     const [searchCity, setSearchCity] = useState('Dhaka');
     const handleSearch = (city) => { 
        setSearchCity(city)
      }

    return (
        <div className={` bg-[#235191] w-full mx-auto font-poppins` }>
            <Navbar handleSearch={handleSearch}/>
            <div className='max-w-7xl mx-auto px-5'>
            <Outlet context ={searchCity}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;

import { useContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { SearchContext } from './context/SearchContext';

const App = () => {
    const {isDay} = useContext(SearchContext)

     const [searchCity, setSearchCity] = useState('Dhaka');
     const handleSearch = (city) => { 
        setSearchCity(city)
      }

    return (
        <div className={` ${isDay ? ('bg-[#235191]'):('bg-[#29394c]')} h-72 w-full mx-auto font-poppins` }>
            <Navbar handleSearch={handleSearch}/>
            <div className='max-w-7xl mx-auto'>
            <Outlet context ={searchCity}/>
            </div>
        </div>
    );
};

export default App;
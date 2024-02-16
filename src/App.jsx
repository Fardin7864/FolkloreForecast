
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    const [isDay, setIsDay] = useState(true); // State to track day or night
  
    useEffect(() => {
      const checkTime = () => {
        const date = new Date();
        const hours = date.getHours();
        // Check if it's day (assuming day is between 6 AM to 6 PM)
        setIsDay(hours >= 6 && hours < 18);
      };
  
      const interval = setInterval(checkTime, 60000); // Check time every minute
      checkTime(); // Initial check
      return () => clearInterval(interval); // Cleanup
    }, []);

    // console.log(isDay)

    return (
        <div className={` ${isDay ? ('bg-[#235191]'):('bg-[#29394c]')} h-72 w-full mx-auto font-poppins` }>
            <Navbar/>
            <div className='max-w-7xl mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default App;
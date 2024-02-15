
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className=' bg-[#29394c] h-72 w-full mx-auto font-poppins'>
            <Navbar/>
            <div className='max-w-7xl mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default App;
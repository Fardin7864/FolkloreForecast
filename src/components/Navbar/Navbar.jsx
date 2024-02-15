import { GoSearch } from "react-icons/go";
import PopulerCarousel from "./PopulerCarousel";

const Navbar = () => {
    return (
        <div className=" bg-[#515f6f] w-full">
            <div className=" max-w-7xl mx-auto">
                <form className=" py-3 flex flex-row items-center">
                <input 
                type="text"
                placeholder="Search for City"
                className=" text-black rounded-full pl-5 text-base px-3 py-1 lg:w-1/4 font-normal"
                />
                <button type="submit" className=" relative -left-7"><GoSearch/></button>
                </form>
                <div>
                    <PopulerCarousel/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
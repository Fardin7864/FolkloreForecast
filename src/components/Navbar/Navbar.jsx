import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import PopulerCarousel from "./PopulerCarousel";
import { SearchContext } from "../../context/SearchContext";

const Navbar = ({handleSearch}) => {
  const {isDay, cityData} = useContext(SearchContext)
  const handleSearchInput = (city) => { 
    handleSearch(city)
   }
   const handleSubmit = (e) => { 
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search)
    handleSearchInput(search)
    }


  return (
    <div className={`w-full ${isDay ? "bg-[#325b8f]" : "bg-[#515f6f]"}`}>
      <div className="max-w-7xl mx-auto flex w-full items-center">
        <form onSubmit={handleSubmit} className="py-3 flex flex-row items-center lg:w-1/4 w-full">
          <input
            type="text"
            name="search"
            placeholder="Search for City"
            className="text-black rounded-full pl-5 text-base px-3 py-1.5 w-full font-normal ml-3 lg:ml-0"
          />
          <button type="submit" className="relative -left-7">
            <GoSearch />
          </button>
        </form>
        <div className=" lg:w-3/4 hidden lg:block">
          <PopulerCarousel citys={cityData} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

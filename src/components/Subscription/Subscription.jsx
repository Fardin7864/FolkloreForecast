import { useState } from "react";
 import { useEffect } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios/useAxios";
import { toast } from "react-toastify";

const Subscription = () => {
  const axios = useAxios();
  const [adPic, setadPic] = useState();
  const [isAdd, setisAdd] = useState(false);
  const location = useLocation();


  const { isLoading, data } = useQuery({
    queryKey: ['ad'],
    queryFn: () => {
      axios.get("/advertise?category=subscription")
      .then(res => setadPic(res.data[0]))
  },
  });
  // const adPic =data?.data[0];
// console.log(adPic)

  useEffect(() => {
    if(location.pathname === "/all" || location.pathname === '/wishlist')
    {
      setisAdd(true)
    }


  }, [axios,location]);
  // console.log(adPic)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const user = { email };
    axios.post("/subscriber", user).then((res) => {
      if (res.data.acknowledged) {
        toast("Thank you for subscribing to our newsletter!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        e.target.reset();
      }
    });
  };


  return (
    <div className=" w-full flex flex-col justify-start mt-10">
     {
      !isAdd ? ( <div>
        <img src={adPic?.img} alt="" />
      </div>) : ""
     }
      <div className=" mt-20 bg-[#f7f7f7] flex items-center justify-center py-10 text-gray-800">
        <div className=" flex flex-col justify-center items-center">
          <SlEnvolopeLetter className=" text-6xl" />
          <div className=" px-3">
            <h4 className=" md:text-3xl text-2xl font-bold text-center">
              Subscribe to Updates
            </h4>
            <p className=" text-xs md:text-lg text-center my-2">
              Get the latest creative news from SmartMag about art & design.
            </p>
          </div>
          <form onSubmit={handleSubmit} className=" flex flex-col w-[80%]">
            <input
              type="email"
              name="email"
              placeholder="Your email here"
              className=" bg-white py-3 px-2 pl-4 text-lg text-black rounded-lg my-3"
            />
            <input
              type="submit"
              value="SUBSCRIBE"
              placeholder="Your email here"
              className=" bg-[#fb3158] py-3 w-full pl-4 text-sm font-semibold text-white rounded-lg my-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

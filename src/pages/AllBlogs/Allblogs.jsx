
import Subscription from "../../components/Subscription/Subscription";
import TrandingNow from "../../components/TrandingNow/TrandingNow";
import Blogs from "./Blogs/Blogs";
import Toppost from "../../components/TopPost/Toppost";
import Followus from "../../components/FollowUs/Followus";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Allblogs = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["ad1"],
    queryFn: () => axios.get("https://blog-bloom-server-silk.vercel.app/api/v1/advertise?category=allpage-ad-1"),
  });
  const ad = data?.data[0]?.img

  const { data: addSec } = useQuery({
    queryKey: ["ad2"],
    queryFn: () => axios.get("https://blog-bloom-server-silk.vercel.app/api/v1/advertise?category=allpage-ad-2"),
  });
  const ad2 = addSec?.data[0]?.img

  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Blogs></Blogs>
        </div>
        <div className=" w-full lg:w-3/12">
          <img src={ad} alt="" className=" w-full mt-16" />
          <Toppost></Toppost>
          <Followus></Followus>
          <TrandingNow></TrandingNow>
          <Subscription></Subscription>
          <img src={ad2} alt="" className=" w-full mt-16" />
        </div>
      </div>
    </div>
  );
};

export default Allblogs;

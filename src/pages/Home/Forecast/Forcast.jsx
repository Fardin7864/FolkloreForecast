 
const Forcast = ({ todayForecast }) => {
  const date = new Date().toString().split(" ")[1];
  return (
    <div className=" my-6">
      <h4 className=" text-gray-50 px-5 text-lg my-3">5 DAY FORECAST</h4>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {todayForecast?.forecast?.forecastday?.map((day) => (
          <div key={day.date} className="card shadow-xl bg-[#285593] hover:opacity-70">
            <div className="card-body">
              <h2 className="card-title text-gray-200">{day.date.split("-")[2]} {date}</h2>
              <div className=" flex items-center gap-1">
          <img src={day.day?.condition?.icon} alt="" className=" w-10" />
          <p className=" text-gray-50 text-sm">
            Max  {day.day?.maxtemp_c}°C
          </p>
          <p className=" text-gray-50 text-sm">
            Min {day.day?.mintemp_c}°C
          </p>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forcast;

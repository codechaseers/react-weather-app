import cloudyimage from "../../assets/icons/cloudy.png";
import location from "../../assets/icons/pin3.png";
import nightpng from "../../assets/icons/night.png";
import cloudsnight from "../../assets/icons/cloudsnight.png";
import clearsky from "../../assets/icons/clearsky.png";
import clouds from "../../assets/icons/clouds.png";
import scatteredclouds from "../../assets/icons/scatteredclouds.png";
import mist from "../../assets/icons/mist.png";
import shower from "../../assets/icons/shower.png";
import rain from "../../assets/icons/rain.png";
import thunderstorm from "../../assets/icons/thunderstorm.png";
import snow from "../../assets/icons/snow.png";

const WeatherCard = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const dayOfWeek = days[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="Weather_Display_card">
        {/* <img className="temp_icon" src= {data &&`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> */}

        {data.weather[0].icon == "01n" ? (
          <img className="temp_icon" src={nightpng} alt="" />
        ) : data.weather[0].icon == "02n" ? (
          <img className="temp_icon" src={cloudsnight} alt="" />
        ) : data.weather[0].icon == "01d" ? (
          <img className="temp_icon" src={clearsky} alt="" />
        ) : data.weather[0].icon == "02d" ? (
          <img className="temp_icon" src={clouds} alt="" />
        ) : data.weather[0].icon == "03d" ||
          data.weather[0].icon == "03n" ||
          data.weather[0].icon == "04d" ||
          data.weather[0].icon == "04n" ? (
          <img className="temp_icon" src={scatteredclouds} alt="" />
        ) : data.weather[0].icon == "50d" || data.weather[0].icon == "50n" ? (
          <img className="temp_icon" src={mist} alt="" />
        ) : data.weather[0].icon == "09d" || data.weather[0].icon == "09n" ? (
          <img className="temp_icon" src={shower} alt="" />
        ) : data.weather[0].icon == "10d" || data.weather[0].icon == "10n" ? (
          <img className="temp_icon" src={rain} alt="" />
        ) : data.weather[0].icon == "11d" || data.weather[0].icon == "11n" ? (
          <img className="temp_icon" src={thunderstorm} alt="" />
        ) : data.weather[0].icon == "13d" || data.weather[0].icon == "13n" ? (
          <img className="temp_icon" src={snow} alt="" />
        ) : (
          <></>
        )}

        <span className="date_text">
          {" "}
          {data && data.weather[0].main} , {data && data.weather[0].description}
        </span>
        {/* <span className="temp_text">23°c</span> */}
        <span className="temp_text">
          {" "}
          {data && Math.floor(data.main.temp)}°c
        </span>
        <span className="place_text">
          <img className="location_icon" src={location} alt="" />
          {data && data.name}
        </span>
        <span className="date_text">
          {" "}
          {dayOfWeek}
          {dayOfMonth} {month} {year}
        </span>
        <span className="time_text"> {time}</span>
        {/* <span className="temp_text">Baripada</span> */}
      </div>
    </>
  );
};
export default WeatherCard;

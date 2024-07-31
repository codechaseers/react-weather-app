import "./Weather.css";
import WeatherCard from "./Weathercard";
import WeatherReportCards from "./WeatherReportCards";
import React from "react";
import { useState, useEffect } from "react";
import bgvideo from "../../assets/icons/bgvideo.mp4";
import nightbg from "../../assets/icons/nightbg.mp4";
import clearsky from "../../assets/icons/clearsky.mp4";
import cloude from "../../assets/icons/cloude.mp4";
import rainbg from "../../assets/icons/rainbg.mp4";
import thunderbg from "../../assets/icons/thunderbg.mp4";
import snowfallbg from "../../assets/icons/snowfallbg.mp4";

const Weather = () => {
  const api_key = "1210254713360736499061f17ac801b0";
  const [city, setCity] = useState();
  const [data, setData] = useState();
  const [err, setErr] = useState(false);

  async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;
    // weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    if (data.cod == 200) {
      setData(data);
    }
    // return showWeather(data)
  }
  useEffect(() => {
    getWeather("baripada");
  }, []);

  const serchWeather = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${api_key}&units=metric`;
    // weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    console.log(city);
    if (data.cod == 200) {
      setData(data);
      setErr(false);
    }
    if (data.cod == 404) {
      setErr(true);
    }
    setCity("");
  };

  return (
    <>
      <div className="maindiv">
        {data ? (
          data.weather[0].icon == "01d" || data.weather[0].icon == "02d" ? (
            <video
              className="Bgvideo"
              src={clearsky}
              loop
              autoPlay
              muted
            ></video>
          ) : data.weather[0].icon == "01n" || data.weather[0].icon == "02n" ? (
            <video
              className="Bgvideo"
              src={nightbg}
              loop
              autoPlay
              muted
            ></video>
          ) : data.weather[0].icon == "03d" ||
            data.weather[0].icon == "03n" ||
            data.weather[0].icon == "04d" ||
            data.weather[0].icon == "04n" ||
            data.weather[0].icon == "50d" ||
            data.weather[0].icon == "50n" ? (
            <video
              className="Bgvideo"
              src={cloude}
              loop
              autoPlay
              muted
            ></video>
          ) : data.weather[0].icon == "09d" ||
            data.weather[0].icon == "09n" ||
            data.weather[0].icon == "10d" ||
            data.weather[0].icon == "10n" ? (
            <video
              className="Bgvideo"
              src={rainbg}
              loop
              autoPlay
              muted
            ></video>
          ) : data.weather[0].icon == "13d" || data.weather[0].icon == "13n" ? (
            <video
              className="Bgvideo"
              src={snowfallbg}
              loop
              autoPlay
              muted
            ></video>
          ) : data.weather[0].icon == "11d" || data.weather[0].icon == "11n" ? (
            <video
              className="Bgvideo"
              src={thunderbg}
              loop
              autoPlay
              muted
            ></video>
          ) : (
            <video
              className="Bgvideo"
              src={cloude}
              loop
              autoPlay
              muted
            ></video>
          )
        ) : (
          <video className="Bgvideo" src={cloude} loop autoPlay muted></video>
        )}

        <div className="heading">
          <h1>My Weather App</h1>
        </div>

        <div className="search_weather">
          <form onSubmit={serchWeather}>
            <input
              type="text"
              placeholder=" search a city name"
              className="search_input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="search_btn">
              Search
            </button>
          </form>
        </div>
        {err ? <h3>What are you doing this city is not exist ...😣</h3> : <></>}

        {/* Weather Card */}
        {data && <WeatherCard data={data} />}

        {/* Weather_reports_container */}
        {data && <WeatherReportCards data={data} />}
      </div>
    </>
  );
};
export default Weather;

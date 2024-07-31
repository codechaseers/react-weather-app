
import mintemp from "../../assets/icons/min_temp.png";
import maxtemp from "../../assets/icons/hot.png";
import feelslike from "../../assets/icons/feelslike.png";
import humidity from "../../assets/icons/humidity.png";
import wind from "../../assets/icons/storm.png";

const WeatherReportCards=({data})=>{
    return(<>
   
     <div className="Weather_reports_container">
          <div className="Weather_reports_card">
            <span> {data && data.main.feels_like} °C</span>

            <img className="Weather_reports_image" src={feelslike} alt="" />
            <p>Feels Like</p>
          </div>

          <div className="Weather_reports_card">
            <span>{data&& data.main.temp_max} °C</span>

            <img className="Weather_reports_image" src={maxtemp} alt="" />
            <p>Temp Max</p>
          </div>
          <div className="Weather_reports_card">
            <span>{data&& data.main.temp_min} °C</span>

            <img className="Weather_reports_image" src={mintemp} alt="" />
            <p>Temp Min</p>
          </div>
          <div className="Weather_reports_card">
            <span>  {data && data.main.humidity} g.m -3</span>

            <img className="Weather_reports_image" src={humidity} alt="" />
            <p>Humidity</p>
          </div>
          <div className="Weather_reports_card">
            <span>{data&& data.wind.speed}  Km/h</span>

            <img className="Weather_reports_image" src={wind} alt="" />
            <p>Wind Speed</p>
          </div>
        </div>
    </>)
}
export default WeatherReportCards
import "./itemforecast.css";

import { WiHumidity } from "react-icons/wi";
import { FaWater } from "react-icons/fa";

function ItemForecast({ weatherDay }) {
  console.log(weatherDay);
  return (
    <div className="itemForecast-container">
      <div className="itemForecast-header">
        <p className="tempForecast">{weatherDay.main.temp}°</p>
        <div className="infoForecast">
          <p>
            {weatherDay.main.temp_max}° - {weatherDay.main.temp_min}°
          </p>
          <p>
            {weatherDay.main.humidity}%
          </p>
          <p>{weatherDay.weather[0].description}</p>
          <p>{weatherDay.dt_txt}</p>
        </div>
      </div>

        <img
          src={`https://openweathermap.org/img/wn/${weatherDay.weather[0].icon}@2x.png`}
          alt="icon Weather"
        />
    </div>
  );
}

export default ItemForecast;

import Weather from "./Weather";
import Forecast from "./Forecast";
import "./app.css";
import { useState } from "react";
import { getLocation, getWeather, getForecast } from "./data/weather";
import { FaMapMarker, FaSearch } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [city, setCity] = useState("");
  const [infoWeather, setInfoWeather] = useState({ id: 0 });
  const [infoForecast, setInfoForecast] = useState([]);

  const inputHandlet = (e) => setCity(e.target.value);

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  async function buttonHandlet(e) {
    const location = await getLocation(city);
    if (location.length === 0) {
      notifyError("Not found city");
      setCity("Not found city");
    } else {
      notifySuccess("Found city 😀");
      const { lon, lat } = location[0];
      setInfoWeather(await getWeather(lon, lat));
      setInfoForecast(await getForecast(lon,lat));
    }
  }

  return (
    <main className="main-container">
      <section className="container-search">
        <input
          type="search"
          placeholder="Search City"
          className="inputSearch"
          onChange={inputHandlet}
        />
        <button className="buttonSearch" id="btnBuscar" onClick={buttonHandlet}>
          <FaSearch />
        </button>
      </section>

      <h1>
        <FaMapMarker /> {city != "" ? city : "Ciudad"}
      </h1>

      
      {infoWeather.id != 0 ? <Weather weather={infoWeather} /> : <></> }

      {infoForecast.length != 0 ? <Forecast forecast={infoForecast} /> : <></> }

      <ToastContainer />
    </main>
  );
}

export default App;

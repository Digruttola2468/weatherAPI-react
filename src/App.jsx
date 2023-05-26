import Weather from "./Weather";
import Forecast from "./Forecast";

import "./app.css";

import { useState } from "react";
import { getLocation, getWeather, getForecast } from "./data/weather";
import { FaMapMarker, FaSearch } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [city, setCity] = useState("");
  const [infoWeather, setInfoWeather] = useState({ id: 0 });
  const [infoForecast, setInfoForecast] = useState([]);

  const [open, setOpen] = useState(false);

  const inputHandlet = (e) => setCity(e.target.value);

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  async function buttonHandlet(e) {
    setOpen(true);
    const location = await getLocation(city);
    if (location.length === 0) {
      notifyError("Not found city");
      setInfoWeather({id: 0});
      setInfoForecast([]);
    } else {
      notifySuccess("Found city 😀");
      const { lon, lat } = location[0];
      setInfoWeather(await getWeather(lon, lat));
      setInfoForecast(await getForecast(lon,lat));
    }
    setOpen(false);
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}

export default App;

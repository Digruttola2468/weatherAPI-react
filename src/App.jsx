import Weather from './Weather';
import './app.css';
import { useState } from 'react';
import { getLocation, getWeather } from './data/weather'
import { FaMapMarker,FaSearch } from "react-icons/fa";

function App() {

  const [city,setCity] = useState("");
  const [infoWeather,setInfoWeather] = useState({id: 0});

  const inputHandlet = (e) => setCity(e.target.value);

  async function buttonHandlet(e) {
    const location = await getLocation(city);
    const { lon, lat } = location[0];
    setInfoWeather(await getWeather(lon,lat));
  }

  return (
    <main className="main-container" >
      <section className="container-search">
        <input type="search" placeholder="Search City" className="inputSearch" onChange={inputHandlet} />
        <button className="buttonSearch" id="btnBuscar" onClick={buttonHandlet}>
          <FaSearch/>
        </button>
      </section>
      
      <h1><FaMapMarker/> {city}</h1>

      <Weather weather={infoWeather} city={city} />
    </main>
  );
}

export default App;

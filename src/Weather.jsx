import "./weather.css";

function setFavicons(favImg){
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',favImg);
  headTitle.appendChild(setFavicon);
}


function Weather({ weather }) {
  let image = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  setFavicons(image);
  return (
    <section className="section-today">
      <div className="container-weather">
        <div>
          <img
            src={image}
            alt="icon Weather"
          />
          <p className="description">{weather.weather[0].description}</p>
        </div>

        <div className="container-infoWeather">
          <p className="temp">{weather.main.temp}°</p>
          <p className="feel-like">feels_like: {weather.main.feels_like}°</p>
          <p className="humidity">humidity: {weather.main.humidity}%</p>
        </div>
      </div>
    </section>
  );
}

export default Weather;

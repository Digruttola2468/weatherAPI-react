import "./weather.css";

function Weather({ weather, city }) {
  console.log(weather);
  if (weather.id == 0) {
    return <></>;
  }
  let image = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  console.log(image);
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

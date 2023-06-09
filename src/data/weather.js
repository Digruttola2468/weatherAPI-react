const APIKEY = "3a194e67242bc4f3a1efdf0cabe02328";

export async function getLocation(city) {
    const URL_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`;
    const getLocationAPI = await fetch(URL_API, {method: 'GET'});
    const coordenadas = await getLocationAPI.json();
    return coordenadas;
}

export async function getWeather(lon,lat) {
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

    const getTiemp = await fetch(URL_API, {method: 'GET'});
    const getTiempJson = await getTiemp.json();
    return getTiempJson;
}

export async function getForecast(lon,lat) {
    const URL_API = `https://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}&units=metric&lat=${lat}&lon=${lon}&cnt=10`;

    const getForecast = await fetch(URL_API, {method: 'GET'});
    const getForecastJSON = await getForecast.json();
    const getListForecast = getForecastJSON.list;
    return getListForecast;
}
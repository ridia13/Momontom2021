'use strict';

const weather = document.querySelector('.js-weather');
const API_KEY = "8ce1e0dd6fbb3c60a79b1eaa7a4f9941";
const GEO_LS = 'geo';

function saveCoords(location) {
  localStorage.setItem(GEO_LS, JSON.stringify(location));
}

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
      return response.json();
    }).then(function(json){
      // console.log(json.weather[0].main);
      const temp = json.main.temp;
      const name = json.name;
      const main = json.weather[0].main;
      weather.innerText = `${temp}° ${main}`;
    })
}

function successGeo(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const location = {
    latitude,
    longitude
  }
  saveCoords(location);
  getWeather(latitude, longitude);
}

function errorGeo() {
  console.log(`error!!`);
}

function getGeo() {
  navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
}

function loadGeo() {
  const loadedCoords = localStorage.getItem(GEO_LS);
  if (loadedCoords === null) {
    getGeo();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadGeo();
}
init();
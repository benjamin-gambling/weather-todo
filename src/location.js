const API_KEY_OW = "2ce3dfb52e17a79a71ce8a47302aae7f";

//HOME LOCATION
const navGeo = navigator.geolocation;
const home = { lat: "53.3807", lng: "-1.47023" }; //SHEFFIELD
const current = {};
console.log([home, current]);

// TO DO: Set 'Faves' so can toggle through saved places
/* const setFav = (obj) => {
    favourites.push(obj);
    localStorage.setItem("favourites", favourites);
    }; */

const obtain = async () =>
  navGeo.getCurrentPosition(
    (position) => {
      current.lat = position.coords.latitude.toString();
      current.lng = position.coords.longitude.toString();
      weather(current.lat, current.lng, API_KEY_OW);
    },
    (error) => {
      console.error(error);
      console.log("Failed to obtain location: Set to Home");
      current.lat = home.lat;
      current.lng = home.lng;
      weather(current.lat, current.lng, API_KEY_OW);
    }
  );

const weather = async (lat, lng, api, unit) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${unit}&appid=2ce3dfb52e17a79a71ce8a47302aae7f`;
    const responce = await fetch(url, { mode: "cors" });
    const weatherData = await responce.json();
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
};

export { obtain, weather };

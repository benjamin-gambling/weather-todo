//HOME LOCATION

const navGeo = navigator.geolocation;
const home = { latitude: 50.124110699999996, longitude: -122.95187550000001 }; //WHISTLER
const current = {};
const favourites = [current, home];

const setFav = (obj) => {
  favourites.push(obj);
  localStorage.setItem("favourites", favourites);
};
const obtain = () => {
  try {
    navGeo.getCurrentPosition((position) => {
      current.latitude = position.coords.latitude;
      current.longitude = position.coords.longitude;
    });
    console.log(current);
  } catch (error) {
    console.log("Failed to obtain location: Set to Home");
    current.latitude = home.latitude;
    current.longitude = home.longitude;
  }
};

export { obtain };

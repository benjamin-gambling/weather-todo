import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Title from "./Title";
import Weather from "./Weather";
import Search from "./Search";
import TempUnits from "./TempUnits";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "metric",
      currentLocation: { lat: "", lng: "" },
      search: { lat: "", lng: "" },
      home: { lat: "", lng: "" },
      weatherData: [],
      //favourites = []
    };
  }

  componentWillMount = () => this.obtain();

  //Obtain Geo: Lat & Lng
  obtain = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          {
            currentLocation: {
              lat: position.coords.latitude.toString(),
              lng: position.coords.longitude.toString(),
            },
          },
          () => {
            this.weather(
              this.state.currentLocation.lat,
              this.state.currentLocation.lng,
              this.state.unit
            );
          }
        );
      },
      (error) => {
        console.error(error);
        this.state.home.lat !== ""
          ? this.setState({
              currentLocation: {
                lat: this.state.home.lat,
                lng: this.state.home.lng,
              },
            })
          : this.setState({
              currentLocation: { lat: "47.2329", lng: "-123.959" },
            });
      }
    );
  };

  weather = async (lat, lng, unit) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${unit}&appid=2ce3dfb52e17a79a71ce8a47302aae7f`;
      const responce = await fetch(url, { mode: "cors" });
      const weatherData = await responce.json();
      this.setState((oldState) => ({
        weatherData: [
          ...oldState.weatherData,
          { name: weatherData.name, temp: weatherData.main.temp },
        ],
      }));
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div id="container">
        <Title />
        <Weather data={this.state.weatherData} />
        <Search />
        <TempUnits />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

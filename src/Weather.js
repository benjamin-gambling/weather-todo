import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div id="weather">
        {this.props.data &&
          this.props.data.map((obj, index) => {
            return (
              <div key={index}>
                <h2>{obj.name}</h2>
                <h3>{obj.temp}&deg;</h3>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Weather;

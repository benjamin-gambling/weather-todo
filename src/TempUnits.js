import React from "react";

class TempUnits extends React.Component {
  render() {
    return (
      <div id="temp-units">
        <button
          type="button"
          name="temp-unit"
          value="metric"
          checked={true}
          id="active"
        >
          &deg;C
        </button>
        /
        <button type="button" name="temp-unit" value="imperial">
          &deg;F
        </button>
      </div>
    );
  }
}

export default TempUnits;

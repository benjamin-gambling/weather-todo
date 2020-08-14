import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as location from "./location";

class Main extends React.Component {
  render() {
    return (
      <div id="title">
        <div>
          <h1 id="title-weather">
            <button>Weather</button>
          </h1>
        </div>
        <div>
          <h1 id="title-todo">
            <button>ToDo</button>
          </h1>
        </div>
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

location.obtain();

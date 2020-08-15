import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div id="title">
        <div>
          <h1 id="title-weather">
            <button id="active">Weather</button>
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

export default Title;

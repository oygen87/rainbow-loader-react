import React, { Component } from "react";

import { RainbowLoader } from "rainbow-loader-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>{`<RainbowLoader />`}</h3>
        <RainbowLoader />
        <h3>{`<RainbowLoader css={{ animationDuration: "10s" }} />`}</h3>
        <RainbowLoader css={{ animationDuration: "10s" }} />
        <h3>{`<RainbowLoader css={{ height: "1rem" }} />`}</h3>
        <RainbowLoader css={{ height: "1rem" }} />
        <h3>{`<RainbowLoader css={{ width: "50%", animationDuration: "5s" }} />`}</h3>
        <RainbowLoader css={{ width: "50%", animationDuration: "5s" }} />
      </div>
    );
  }
}

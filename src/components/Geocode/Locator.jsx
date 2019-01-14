import React, { Component } from "react";
import "./App.css";
import { GoogleComponent } from "react-google-location";
const API_KEY = "AIzaSyCWpybRRncq5SBB1g0KbgtOZxCHQEc63Kw";

class Locator extends Component {
  state = {
    place: null
  };

  handleAlamat = () => {
    const alamat = this.state.place;
    this.props.dapetinAlamat(alamat);
  };

  render() {
    console.warn("test", this.state.place);
    return (
      <div className="wrapper">
        <GoogleComponent
          apiKey={API_KEY}
          language={"en"}
          country={"country:id"}
          onChange={e => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default Locator;

import React, { Component } from "react";
import Componente from "./Componente";

export default class App extends Component {
  render() {
    return(
      <>
        <h1>Hello World</h1>
        <Componente nome="Lucas"/>
      </>
    );
  }
}

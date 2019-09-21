import React, { Component } from "react"

export default class Componente extends Component {
  render() {
    return (
      <>
        <h1>{this.props.nome}</h1>
      </>
    )
  }
}

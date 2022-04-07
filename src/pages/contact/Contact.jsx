import React, { Component } from "react";
import Form from "./Form";
import Action from "../home/Action";
import Map from "./Map";
export default class Contact extends Component {
  render() {
    return (
      <>
        <Map />

        <Form />
        <Action />
      </>
    );
  }
}

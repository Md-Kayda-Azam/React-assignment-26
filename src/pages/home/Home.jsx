import React, { Component } from "react";
import Action from "./Action";
import Count from "./Count";
import Gallery from "./Gallery";
import Intro from "./Intro";
import Parallax from "./Parallax";
import Scale from "./Scale";

export default class Home extends Component {
  render() {
    return (
      <>
        <Intro />
        <Parallax />
        <Scale />
        <Count />
        <Gallery />
        <Action />
      </>
    );
  }
}

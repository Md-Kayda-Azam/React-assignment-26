//external imports
import React, { Component } from "react";

//internal imports
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Team from "./pages/Team/Team";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home/>
        <Team />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;

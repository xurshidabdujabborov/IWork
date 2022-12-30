import React from "react";
import About from "./components/About/About";
import Bottom from "./components/Bottom/Bottom";
import Center from "./components/Center/Center";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Work from "./components/Work/Work";

function App() {
  return <div className="App">
    <Nav />
    <Header/>
    <Main/>
    <About/>
    <Work/>
    <Center/>
    <Bottom/>
    <Footer/>
  </div>;
}

export default App;

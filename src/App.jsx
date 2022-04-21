import React from "react";
import Main from "./components/Main/Main";
import Nav from "./components/NavBar/Nav";
import beers from "./data/beers";

const App = () => {
  const filteredbeer = beers.filter(beer => beer.name).slice(0, 9);
  return (
    <div>
      <Nav/>
      <Main beerArray={filteredbeer}/>
    </div>
  );
};

export default App;

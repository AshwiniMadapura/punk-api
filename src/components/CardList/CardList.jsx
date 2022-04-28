import React from 'react'
import Card from '../Card/Card';
import CardInfo from '../CardInfo/CardInfo';
import "./CardList.css"
import { Routes, Route } from "react-router-dom";

const CardList = ({beerArr}) => {
    // const filteredbeer = beers.filter(beer => beer.name).slice(0, 9);
    
  return (
      <>
    {/* <div className="card-container">{beerListJSX} */}
    {/* <Card beerArray={filteredbeer} beerDetails="Know more" /> */}
    {/* </div> */}
    
    <Routes>
    <Route
    path='/'
    element={<Card beerArray={beerArr} beerDetails="Know more" />}
    />
    <Route
    path="beer/:name"
    element={<CardInfo beerArray={beerArr}/>}
    />
    
    </Routes>
    
    </>
  )
}

export default CardList
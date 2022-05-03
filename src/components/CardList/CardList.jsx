import React from 'react'
import Card from '../Card/Card';
import CardInfo from '../CardInfo/CardInfo';
import "./CardList.css"
import { Routes, Route } from "react-router-dom";

const CardList = ({beerArr}) => {
    
    
  return (
    <>
    
    <Routes>
      <Route
        path='/'
        element={<Card beerArray={beerArr} />}
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
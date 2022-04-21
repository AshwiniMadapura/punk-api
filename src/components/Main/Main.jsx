import React from 'react'
import "./Main.css"

const Main = ({beerArray}) => {
//  const {beerArray}=props;
    const beerListJSX=beerArray.map((beer)=>{
        return(
            <div>
                <h1>{beer.name}</h1>
                <img className="album-tiles__img" src={beer.image_url} alt="" />
            </div>
        )
    })
  return (
    <div className="album-tiles">{beerListJSX}</div>
  )
}

export default Main
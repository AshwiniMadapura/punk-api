import React, { useState, useEffect } from 'react'
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = () => {
    
    const [beerArr, setBeerArr] =useState( [] );
    const [beerRange, setBeerRange] = useState( 10 );

    const handleBeerRangeChange= (event) =>{
        setBeerRange(event.target.value);
    }

    useEffect( ()=>{
        console.log("in useEffect")

        fetch("https://punkapi.com/" + beerRange)
        .then(response => response.json())
        .then(beerObjects => {
            console.log( beerObjects );
            setBeerArr(beerObjects.results )
        })

        
    }, [beerRange] );

    // empty dependency array- run at loading

    console.log("after fetch");

    const beerJSX = beerArr.map( beer =>{
        return <FilterItem abv={beer.abv} />
    })

    
  return (
    <>
    <div>Filter Options</div>
    <form > 
        <label htmlFor="user-range"></label>
        <input type="range" name="user-range" min="1" max="50"
         onChange={handleBeerRangeChange} value={beerRange} />
     </form>
    {beerJSX}
    </>
  )
}
export default FiltersList
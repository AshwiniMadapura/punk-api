import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ beerArray,beerDetails }) => {
  return (
    <>
      { beerArray.map(list => (
        <div key={ list.id } className='beer-image-card'>
            <img src={list.image_url} className="album-tiles__img" alt="" />
          <h3 className='beer__heading'>Name: <Link to={`/beer/${list.name}`}>{list.name}</Link></h3>
          <h4>PH: {list.ph }%</h4>
        </div>
      ))}
    </>
  )
}

export default Card
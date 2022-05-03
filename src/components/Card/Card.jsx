import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ beerArray }) => {
  return (
    <>
      {beerArray.map((list) => (
        <div key={list.id} className="beer-image-card">
          <img src={list.image_url} className="album-tiles__img" alt="" />
          <h3>
            {" "}
            <Link to={`/beer/${list.name}`} className="beer__heading">
              {list.name}
            </Link>
          </h3>
          <h4 className="abv">ABV: {list.abv}%</h4>
        </div>
      ))}
    </>
  );
};

export default Card;

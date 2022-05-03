import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CardInfo.css";

const CardInfo = ({ beerArray }) => {
  const { name } = useParams();

  return (
    <div className="full-detail">
      <div className="explore-container">
        {beerArray
          .filter((list) => list.name === name)
          .map((list) => (
            <div className="full-card" key={list.id}>
              <div>
                <img className="image__section" src={list.image_url} alt="" />
              </div>
              <div className="details">
                <h1>{list.name}</h1>
                <h4>{list.tagline}</h4>
                <br />
                <h4>First brewed on:{list.first_brewed}</h4>
                <br />
                <h4 className="side_heading">Description:</h4>
                <p> {list.description}</p>
                <br />
                <h4 className="side_heading">Preparation:</h4>
                <p>{list.brewers_tips}</p>
                <br />
                <h4 className="side_heading">Food Pairing with: </h4>
                <li>{list.food_pairing[0]}</li>
                <li>{list.food_pairing[1]}</li>
                <li>{list.food_pairing[2]}</li>
                <Link to="/">
                  <button className="back_button">Back</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardInfo;

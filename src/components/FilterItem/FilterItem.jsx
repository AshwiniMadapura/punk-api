import React from 'react'
const FilterItem = props => {
  const { abv } = props;
  return (
    <div>
        <h3>{abv}</h3>
        {/* <img src={imgURL} alt={name} /> */}
    </div>
  )
}
export default FilterItem
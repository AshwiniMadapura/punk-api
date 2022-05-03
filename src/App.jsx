import React, { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import Nav from "./components/NavBar/Nav";
import beers from "./data/beers";

const App = () => {
  // creating an empty array initially called defaultBeers
  const [defaultBeers, setDefaultBeers] = useState([]);
  const [beerArr, setBeerArr] = useState(beers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSearch, setFilterSearch] = useState(false);

  // Fetching the API
  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((userObjects) => {
        console.log(userObjects);
        setBeerArr(userObjects);
        setDefaultBeers(userObjects);
      });
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  // search option
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(cleanInput, filterSearch);
    loadBeer(cleanInput, filterSearch);
  };

  // filter checkbox
  const handleFilterSearch = (event) => {
    const checked = event.target.checked;
    setFilterSearch(checked);
    loadBeer(searchTerm, checked);
  };

  const searchByName = (name) => {
    return defaultBeers.filter((beer) => {
      return beer.name.toLowerCase().includes(name);
    });
  };

  const searchByAbvValue = (name) => {
    console.log(name);
    return defaultBeers.filter((beer) => {
      if (beer.abv > 5) {
        // console.log("inside if")
        if (name) {
          return beer.name.toLowerCase().includes(name);
        } else {
          // console.log("inside if else")
          return true;
        }
      }
      return false;
    });
  };

  const loadBeer = (searchName, filter) => {
    console.log("in load beer");
    let filteredBeers = defaultBeers;
    if (searchName) {
      if (filter) {
        filteredBeers = searchByAbvValue(searchName);
      } else {
        filteredBeers = searchByName(searchName);
      }
    } else if (filter) {
      console.log("calling search by abv");
      filteredBeers = searchByAbvValue();

      // console.log("inside else"+filteredBeers)
    }

    setBeerArr(filteredBeers);
    console.log(filteredBeers);
    return filteredBeers;
  };

  return (
    <div>
      <Nav
        searchTerm={searchTerm}
        handleInput={handleInput}
        filterSearch={filterSearch}
        filterSearchChange={handleFilterSearch}
      />
      <div className="card-container">
        <CardList beerArr={beerArr} />
      </div>
    </div>
  );
};

export default App;

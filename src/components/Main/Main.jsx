// App backup
/*import React, {useEffect, useState} from "react";
import CardList from "./components/CardList/CardList";
import Main from "./components/Main/Main";
import Nav from "./components/NavBar/Nav";
import beers from "./data/beers";

const App = () => {
 const [defaultBeers, setDefaultBeers] =useState([]);
  const [ beerArr, setBeerArr ] = useState( beers );
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSearch,setFilterSearch]= useState(false);

  const fetchBeers = ()=>{
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(userObjects => {
        console.log( userObjects );
        setBeerArr(userObjects )
        setDefaultBeers(userObjects)
    })
  }
   
  useEffect(()=>{
    fetchBeers()
  }, [])

  

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(cleanInput)

    
    const filteredBeers=defaultBeers.filter(beer=>{
     return beer.name.toLowerCase().includes(cleanInput)
 
    })
    console.log(filteredBeers)
    setBeerArr(filteredBeers);
  };
  

  
  return (
    <div>
      <Nav searchTerm={searchTerm} handleInput={handleInput}
      
      />
      <div className="card-container">
        
      <CardList  beerArr={beerArr} />
      </div>
    </div>
  );
};

export default App;
*/

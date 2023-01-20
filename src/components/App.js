import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState,useEffect } from "react";

function App() {

  const [listings, SetListings] = useState([])
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => SetListings(data))
  }, [])

  function handleRemoveItem(removedItemId){
    fetch(`http://localhost:6001/listings/${removedItemId}`,{
      method: "DELETE",
      headers: {"Content-type" : "application/json"}
    } )
    .then(()=> {
      SetListings(listings.filter(listing => listing.id !== removedItemId))
    })
  }
  console.log(search)
  const listingsToDisplay = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="app">
      <Header onSearch ={setSearch} />
      <ListingsContainer listingsToDisplay ={listingsToDisplay} onRemoveItem ={handleRemoveItem}/>
    </div>
  );
}

export default App;

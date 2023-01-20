import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listingsToDisplay, onRemoveItem}) {

  const card = listingsToDisplay.map((listing) => {
     return <ListingCard key={listing.id} listing = {listing} onRemoveItem={onRemoveItem} />
  })
  
  return (
    <main>
      <ul className="cards">
        {card}
      </ul>
    </main>
  );
}

export default ListingsContainer;

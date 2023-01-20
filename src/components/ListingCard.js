import React, {useState} from "react";

function ListingCard({listing, onRemoveItem}) {

  const [favorite, SetFavorite] = useState(false)
  const {id, description, image, location} = listing;
  function handleFavoriteClick(event) {
    SetFavorite(!favorite)

  }

  function handleRemoveClick(){
    onRemoveItem(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleRemoveClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

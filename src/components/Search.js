import React from "react";

function Search({onSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    onSearch(e.target[0].value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

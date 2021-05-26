import React from "react";

function SearchBox({ setQuery }) {
  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}

export default SearchBox;

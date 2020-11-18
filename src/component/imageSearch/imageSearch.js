import React, { useState } from "react";
import "./imageSearch.css";

function ImageSearch({ handleSearch }) {
  const [searchImage, setSearchImage] = useState("");

  return (
    <div className="search">
      <input
        className="search-inp"
        placeholder="Search Image"
        value={searchImage}
        onChange={(e) => setSearchImage(e.target.value)}
        type="text"
      />
      <button className="btn" onClick={async () => handleSearch(searchImage, setSearchImage)}>
        Search
      </button>
    </div>
  );
}

export default ImageSearch;

import React, { useState } from "react";

function ImageSearch({handleSearch}) {
  const [searchImage, setSearchImage] = useState("yellow flowers");

  return (
    <div>
      <input
        placeholder="Search Image"
        value={searchImage}
        onChange={(e) => setSearchImage(e.target.value)}
        type="text"
      />
      <button onClick={handleSearch(searchImage)}>Search</button>
    </div>
  );
}

export default ImageSearch;

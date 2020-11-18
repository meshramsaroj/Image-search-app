import React from "react";
import "./imageList.css";

function ImageList({ images }) {
  return (
    <div className="flex-row">
      {images.map((image, i) => (
        <div className="image-list" key={i}>
          <img src={image.largeImageURL} alt={image.tags}></img>
        </div>
      ))}
    </div>
  );
}

export default ImageList;

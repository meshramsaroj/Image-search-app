import React from 'react'
const errorImage = "https://static.thenounproject.com/png/1107010-200.png"

 function ImageNotFound() {
    return (
        <div>
            <h1>Image not found</h1>
            <img src={errorImage} alt="Error" />
        </div>
    )
}

export default ImageNotFound ;

import "./App.css";
import { useEffect, useState } from "react";
import ImageList from "./component/imageList/imageList";
import ImageNotFound from "./component/ImageNotFound/ImageNotFound";
import ImageSearch from "./component/imageSearch/imageSearch";
const API_KEY = "19144842-32a1e8ce96f0750085700e17b";

function App() {
  let URL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(async () => {
    if (images.length > 1) return null;
    const request = await fetch(URL);
    const results = await request.json();
    setImages(results.hits);
  }, [images]);

  const fetchAPI = async (searchImage) => {
    URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchImage}&&per_page=15`;
    const request = await fetch(URL);
    const results = await request.json();
    if (results.total === 0) {
      setError(true);
    } else {
      setImages(results.hits);
      setError(false);
    }
  };
  const handleSearch = (searchImage, setSearchImage) => {
    console.log("anything", searchImage);
    fetchAPI(searchImage);

    setSearchImage("");
  };

  return (
    <div className="App">
      <h1>Image Searcher App</h1>
      {/* <div className="search">
        <input
          className="search-inp"
          placeholder="Search Image"
          value={searchImage}
          onChange={(e) => setSearchImage(e.target.value)}
          type="text"
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div> */}
      <ImageSearch handleSearch={handleSearch} />
      {!error ? <ImageList images={images} /> : <ImageNotFound />}
    </div>
  );
}

export default App;

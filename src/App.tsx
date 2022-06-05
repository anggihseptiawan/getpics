import React, { useState } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { ImageTypes } from "./@types/image";

const App = () => {
  const [images, setImages] = useState<ImageTypes[]>([]);

  const onSearchSubmit = async (term: string) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    setImages(response.data.results);
  };

  return (
    <div className="ui container pb-20" style={{ paddingBottom: "80px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;

import React from "react";
import ImageCard from "./ImageCard";
import { ImageTypes } from "../@types/image";
import "./ImageList.css";

interface ImageListProps {
  images: ImageTypes[];
}

const ImageList = (props: ImageListProps) => {
  return (
    <div className="image-list">
      {props.images.map((image: ImageTypes) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;

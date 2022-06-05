import React, { useEffect, useState, useRef } from "react";
import { ImageTypes } from "../@types/image";

const ImageCard = ({ image }: { image: ImageTypes }) => {
  const [spans, setSpans] = useState<number>(0);
  const { description, urls } = image;

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current === null) return;

    imageRef.current.addEventListener("load", () => {
      if (imageRef.current === null) return;
      const height = imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
    });

    if (spans === 0) setSpans(Math.ceil(imageRef.current.clientHeight / 10));
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;

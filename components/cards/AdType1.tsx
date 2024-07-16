import React from 'react'
import Image from "next/image";

interface ImageProps {
    src: string;
  }
  
  interface ImageContainerProps {
    images: ImageProps[];
  }

const AdType1: React.FC<ImageContainerProps> = ({ images }) => {
  return (
    <div
    style={{
      width: "95%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        style={{
          width: "calc(33.3333% - 13.3333px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={image.src}
          alt={`Image ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ))}
  </div>
  )
}

export default AdType1

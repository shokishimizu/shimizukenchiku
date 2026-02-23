import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageSlider({ isMobile }: { isMobile: boolean }) {
  const slideItems = [
    {
      id: 1,
      src: "/slideshow/1.jpg",
    },
    {
      id: 2,
      src: "/slideshow/2.jpg",
    },
    {
      id: 3,
      src: "/slideshow/3.jpg",
    },
    {
      id: 4,
      src: "/slideshow/4.jpg",
    },
  ];

  return (
    <Carousel>
      {slideItems.map((val, index) => (
      <Carousel.Item key={index}>
        <div
          style={{
            width: "100%",
            height: isMobile ? 280 : 700,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ objectFit: "cover"}}
            src={val.src}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;

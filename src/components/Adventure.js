import React from "react";

import "react-slideshow-image/dist/styles.css";
import "./Adventure.css";
import { Carousel } from "react-bootstrap";
import Page from "./AdventurePage";

const Slideshow = () => {
  return (
    <div className="background-container">
      <div className="container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover23.jpeg"
              alt="First slide"
            />
            <Carousel.Caption className="color">
              <h3> Keila Waterfall</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://static.visitestonia.com/images/3548655/1600_900_false_false_ae645e396bd3caf754fa5d2c7992197a.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Valaste Waterfall</h3>
              <p>
            
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tallinndaytrip.com/wp-content/uploads/2020/01/J%C3%A4gala-juga-1-autor-Carl-Martin-Nisu-1140x530.jpg'"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Jägala waterfall </h3>
              <p>
            
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Page />
    </div>
  );
};

export default Slideshow;

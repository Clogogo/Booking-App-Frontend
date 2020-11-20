import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Luxury.css";
import JourneyCard from "./JourneyCard";

export default () => (
  <div className="background-container">
    <Carousel autoPlay>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1599595405074-5aceb9106c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        />
        <p className="legend"> Järva-Jaani, Järva County, Estonia </p>
      </div>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1592859600977-378df7f369e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        />
        <p className="legend"> Kaberneeme, Harju County, Estonia </p>
      </div>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1601379542595-afb2b20d27f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        />
        <p className="legend"> Kadriorg Palace, Estonia </p>
      </div>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1542740714-cb46e1b964e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        />
        <p className="legend"> Bog Trail </p>
      </div>
    </Carousel>
    <div className="">
      <JourneyCard />
    </div>
  </div>
);

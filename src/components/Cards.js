import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover23.jpeg"
                text="Explore the hidden waterfall locations in Estonia"
                label="Adventure"
                path="/adventure"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Visit the luxurious hostels, and feel the breeze of Estonia"
                label="Luxury"
                path="/Luxury"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-3.jpg"
                text="Set Sail in the Ocean visiting Uncharted Waters and Islands"
                label="Tour"
                path="/Tour"
              />
              <CardItem
                src="images/img-4.jpg"
                text="Experience Activites during winter and summer"
                label="Food"
                path="/Food"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

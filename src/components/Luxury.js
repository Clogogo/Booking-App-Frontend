import React from "react";
import { Fade } from "react-slideshow-image";
import "./Luxury.css";
import Map from "./Map";


const FadeExample = () => {
  const fadeImages = [
    "https://www.tallinkhotels.com/wp-content/uploads/2018/11/estonia_opera_tallink_hotels_cooperation.jpg",
    "https://www.tallinkhotels.com/wp-content/uploads/2016/05/IMG7144.jpg",
    "https://static.visitestonia.com/images/2977822/1600_900_false_false_7e925e0e2251b15f5bb1fa0d2a891f26.jpg",
  ];

  return (
    <div className="luxury-background">
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt="" />
            </div>
            <p>
              Tallink Hotels and the Estonian National Opera bring culture
              closer to hotel guests Guests of Tallink hotels can enrich their
              holiday or business trip with a wide range of cultural events. If
              you do not yet know what to do with your free evening or where to
              go with children, one option is to look at the wide repertoire of
              the opera and ballet world. Here, a good solution is a voucher for
              Estonian National Opera performances, which can be purchased at
              the reception desks of Tallink hotels.
            </p>
          </div>
          <div className="each-fade">
            <p>
              The modern, glass-fronted Tallink Spa Hotel offers a luxurious spa
              area with indoor and outdoor pools. Tallinn’s Old Town and Great
              Coastal Gate are just a 5-minute walk away. Various types of
              saunas, a hot tub, a children’s pool, and an outdoor pool open
              throughout the year are available in the Aqua Spa. Beauty
              treatments are also available. The air-conditioned rooms at
              Tallink Spa & Conference Hotel feature satellite TV, a minibar,
              and a bathroom with bathrobes and hairdryer.
            </p>
            <div>
              <img src={fadeImages[1]} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt="" />
            </div>

            <p>
              Hotel Palace The hotel, which was opened next to the city’s main
              square on 16 January 1937, is one of the most exciting, glamorous,
              and spectacular buildings of its time. The Old Town of Tallinn, a
              modern business quarter, and a multifaceted cultural centre are
              only a few minutes’ walk away. Its 80 years of history and the
              high quality of service have made this building one the most
              prominent hotels in Tallinn for several decades running. According
              to the Tripadvisor Travellers Choice Awards 2018, Hotel Palace is
              the best hotel in Estonia.
            </p>
          </div>
        </Fade>
      </div>
      <Map/>
    </div>
  );
};

export default FadeExample;

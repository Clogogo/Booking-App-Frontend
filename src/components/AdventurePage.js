import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Fragment>
      <Container>
        <Row className="p-3 justify-content-center align-items-center">
          <Col md={8} className="text-center">
            <h1 className="text-white">Water Fall Destination</h1>
            <p className="text-white pt-10">
              The tiny European country of Estonia is fast emerging as a
              favourite amongst travellers looking to explore the continent
              beyond clichés and touristy spots. As you escape to this hidden
              gem close to Scandinavia, myriad unique experiences entice you to
              explore its rich culture and bountiful nature. While Tallinn’s old
              town oozes charm with its winding cobbled streets, pastel
              buildings and magnificent Town Hall, the Baltic beaches and
              hundreds of picture-perfect Estonian islands let you experience
              nature in all its pristine glory. Every pretty corner of this
              gorgeous country promises full bang for its buck with experiences
              that are high on travel-worthiness and easy on your pocket. The
              north-Estonian Baltic Klint boasts of 29 stunning waterfalls that
              allow you a glimpse into this magical land blessed with
              picture-postcard locations and breathtaking natural vistas. Here’s
              our list of the best waterfalls in Estonia that will leave you in
              awe with their sheer beauty.
            </p>
          </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
          <Col md={6}>
            <img
              src={
                "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover23.jpeg"
              }
              width="100%"
              alt=""
            />
          </Col>
          <Col md={6} className="text-center">
            <h3 className="p-2 text-white">Keila Waterfall</h3>
            <p className="p-1 text-white">
              Keila Waterfall is situated about 25 km south-west of the capital
              city of Tallinn, near the village of Keila. It’s located on the
              Keila River in Harju County, at where the river descends from the
              klint plateau into a small klint bay. Keila Waterfall is 6 meters
              high and 60 meters wide. On its right side there id an abandoned
              residence with a park, built in 1833. The park occupies an area of
              25 hectares where you can find more than 80 species of trees and
              shurbs. Near the waterfall you can see an interesting bridge,
              which symbolizes love, and also the small hydro power plant.
            </p>
          </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
          <Col md={6}>
            <img
              src={
                "https://static.visitestonia.com/images/3548655/1600_900_false_false_ae645e396bd3caf754fa5d2c7992197a.jpg"
              }
              width="100%"
              alt=""
            />
          </Col>
          <Col md={6} className="text-center">
            <h3 className="p-1 text-white">Valaste Waterfall</h3>
            <p className="p-1 text-white">
            Valaste Waterfall, located on Valaste stream near the Baltic
                coast, is the highest waterfall in Estonia and in the Baltic
                States. It is 30 meters high and is a popular tourist
                destination in the summer but also in winter, when nature
                creates the ice kingdom. It is not a natural fall but formed by
                directing the water of Kaasikvälja Main Ditch down the 54 meters
                high klint escarpment.
            </p>
          </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
          <Col md={6}>
            <img
              src={
                "https://tallinndaytrip.com/wp-content/uploads/2020/01/J%C3%A4gala-juga-1-autor-Carl-Martin-Nisu-1140x530.jpg"
              }
              width="100%"
              alt=""
            />
          </Col>
          <Col md={6} className="text-center">
            <h3 className="p-1 text-white">Jägala waterfall</h3>
            <p className="p-1 text-white">
            Jägala waterfall, situated in the lower course of the Jägala
                River, is 8 meters high and more than 50 meters in width. This
                natural place is just 30km far from Tallinn in the village. The
                water of Jägala River cuts into the limestone and created here
                about 300 feet long valley. It courses into the nearby water
                basin Linnamäe Veehoidla and then to the Baltic Sea. Jägala
                Falls partially freeze in winter and get a nice icy backdrop.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Testimonials;

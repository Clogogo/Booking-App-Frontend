import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardGroup,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBCardGroup>
      <MDBRow>
        <MDBCol style={{ maxWidth: "40rem" }}>
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src="https://images.unsplash.com/photo-1599595405074-5aceb9106c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle></MDBCardTitle>
              <h5 className="indigo-text">
                <strong>Järva-Jaani, Järva County, Estonia</strong>
              </h5>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{ maxWidth: "40rem" }}>
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src="https://images.unsplash.com/photo-1592859600977-378df7f369e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle></MDBCardTitle>
              <h5 className="indigo-text">
                <strong>Kaberneeme, Harju County, Estonia</strong>
              </h5>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{ maxWidth: "40rem" }}>
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src="https://images.unsplash.com/photo-1601379542595-afb2b20d27f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle></MDBCardTitle>
              <h5 className="indigo-text">
                <strong>Kadriorg Palace, Estonia</strong>
              </h5>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{ maxWidth: "40rem" }}>
          <MDBCard reverse>
            <MDBCardImage
              cascade
              style={{ height: "20rem" }}
              src="https://images.unsplash.com/photo-1542740714-cb46e1b964e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle></MDBCardTitle>
              <h5 className="indigo-text">
                <strong>Bog Trail</strong>
              </h5>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" />
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBCardGroup>
  );
};

export default CardExample;

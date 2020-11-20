import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import './Clip.css'
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div>
        <Fragment>
          <Container>
            <Row className="p-3 justify-content-center align-items-center">
              <Col md={8} className="text-center">
                <h1 className="text-black">About {currentUser.username}</h1>
                
                <div>
                    <Chip
                      icon={<FaceIcon />}
                      label={currentUser.username}
                      clickable
                      color="primary"
                    />
                  
                  <Chip
                    icon={<ConfirmationNumberIcon />}
                    label={currentUser.id}
                    clickable
                    color="primary"
                  />
                  <Chip
                    icon={<EmailIcon />}
                    label={currentUser.email}
                    clickable
                    color="primary"
                  />
                  <Chip
                    icon={<PersonIcon />}
                    label={currentUser.roles}
                    clickable
                    color="primary"
                  />
                  <Chip
                    icon={<FingerprintIcon />}
                    label="Token"
                    clickable
                    color="primary"
                  />
                </div>
                <p className="text-black pt-3">
                  My names are Lucky Ogogo and am aa student of EUAS, studying software development
                </p>
              </Col>
            </Row>
            <Row className="h-100 p-3 justify-content-center align-items-start">
              <Col md={6}>
                <img
                  src={
                    "https://www.tallinkhotels.com/wp-content/uploads/2018/11/estonia_opera_tallink_hotels_cooperation.jpg"
                  }
                  width="100%"
                  alt=""
                />
              </Col>
              <Col md={6} className="text-center">
                <h3 className="p-1">Subtitle</h3>
                <p className="p-1">
                  fermentum iaculis eu non diam phasellus vestibulum lorem sed
                  risus ultricies tristique nulla aliquet enim tortor at auctor
                  urna nunc id cursus metus aliquam eleifend mi in nulla posuere
                  sollicitudin.
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>
        );
      </div>
    );
  }
}

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
import { createElement } from 'react';
import createAXATestimonialsReact from '@axa-ch/testimonials/lib/index.react';


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

    const AXATestimonialsReact = createAXATestimonialsReact(createElement);

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
                <h3 className="p-1">About Me</h3>
                <p className="p-1">
                  When I come to the end of the road,
                  And the sun has set for me,
                  I want no rites in a gloom filled room
                  Why cry for a soul set free?
                  Miss me a little – but not for long.
                  And not with your head bowed low.
                  Remember the love that once we shared.
                  Miss me, but let me go.
                  For this is a journey we must all take,
                  And each must go alone.
                  It’s all part of the master plan,
                  A step on the road to home.
                  When you are lonely and sick at heart,
                  Go to the friends we know,
                  Laugh at all the things we used to do.
                  Miss me, but let me go.
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>


        <AXATestimonialsReact
            title="Estonia Entrepreneurship University of Applied Science"
            subtitle="Software Development"
            keysenabled
        >
          <span>
2020/21 PR-519 Software development project (Švartsman)
</span>
          <div>
            <span>Project submitted </span>
            <span className="o-testimonials__author">Lucky Ogogo, Software Development </span>
          </div>
        </AXATestimonialsReact>


        );
      </div>
    );
  }
}

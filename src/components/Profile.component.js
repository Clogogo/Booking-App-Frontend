import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import {
  Jumbotron,
  Accordion,
  Card,
  Button,
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
      <>
      
         {/*<img src="/videos/video-2.mp4" autoPlay loop muted />*/}
        {this.state.userReady ? (
          <div>
            <Jumbotron>
              <header>
                <h1>
                  Welcome To <strong>{currentUser.username}</strong> Profile
                </h1>
              </header>
            </Jumbotron>
            <div>
              <div className="cards__container">

                <Accordion>
                  <div className="container">
                  <Card.Header>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        User ID
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <div className="cards__item__info"><Card.Body>{currentUser.id}</Card.Body></div>
                    </Accordion.Collapse>
                  </Card.Header>
                  <Card.Header>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        User Name
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{currentUser.username}</Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                    <Card.Header>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          Email Address
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>{currentUser.email}</Card.Body>
                      </Accordion.Collapse>
                    </Card.Header>
                    <Card.Header>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                          Roles
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>{currentUser.roles}</Card.Body>
                      </Accordion.Collapse>
                    </Card.Header>
                    <Card.Header>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                          Token
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body><p>
                          <strong>Token:</strong>{" "}
                          {currentUser.accessToken.substring(0, 5)} ...{" "}
                          {currentUser.accessToken.substr(
                              currentUser.accessToken.length - 5
                          )}
                        </p></Card.Body>
                      </Accordion.Collapse>
                    </Card.Header>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

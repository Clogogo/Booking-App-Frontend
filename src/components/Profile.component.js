import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import {
  ListGroup,
  Tab,
  Row,
  Col,
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
      
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
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
              <div className="hero-container">
                <Accordion>
                  <Card.Header>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        User ID
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                  <Card.Header>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Accordion>
              </div>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1"
              >
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      <ListGroup.Item action href="#link1">
                        User ID
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Email Address
                      </ListGroup.Item>

                      <ListGroup.Item action href="#link3">
                        Authorities
                      </ListGroup.Item>

                      <ListGroup.Item action href="#link4">
                        Token
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="#link1">
                        <p>
                          <li>
                            <strong>Profile User id = </strong> {currentUser.id}
                          </li>
                          <strong>Profile User id = </strong>{" "}
                          {currentUser.username}
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link2">
                        <p>
                          <strong>Email:</strong> {currentUser.email}
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link3">
                        <p>
                          <strong>Authorities:</strong>{" "}
                          {currentUser.roles &&
                            currentUser.roles.map((role, index) => (
                              <li key={index}>{role}</li>
                            ))}
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link4">
                        <p>
                          <strong>Token:</strong>{" "}
                          {currentUser.accessToken.substring(0, 20)} ...{" "}
                          {currentUser.accessToken.substr(
                            currentUser.accessToken.length - 20
                          )}
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

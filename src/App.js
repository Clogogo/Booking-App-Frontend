import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar.css";
import "./components/Cards.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login.component";
import Register from "./components/Register.component";
import Home from "./components/Home.component";
import Profile from "./components/Profile.component";
import BoardUser from "./components/User-component/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import Services from "./components/Services"
import Products from "./components/Products"
import Adventure from "./components/Adventure"
import Luxury from "./components/Luxury"
import Journey from "./components/JourneyCarosel"
import Food from "./components/Food"



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
      click: false,
      button: true,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to='/' className='navbar-logo'>
            EUAS Travel
            <i class='fab fa-typo3' />
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-links">
                Home
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-links">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-links">
                  User
                </Link>
              </li>
            )}
 {currentUser && (
              <li className="nav-item">
                <Link to={"/Luxury"} className="nav-links">
                  Luxury
                </Link>
              </li>
            )}

{currentUser && (
              <li className="nav-item">
                <Link to={"/Tour"} className="nav-links">
                  Tour
                </Link>
              </li>
            )}
 {currentUser && (
              <li className="nav-item">
                <Link to={"/Food"} className="nav-links">
                  Food
                </Link>
              </li>
            )}

{currentUser && (
              <li className="nav-item">
                <Link to={"/Adventure"} className="nav-links">
                  Adventure
                </Link>
              </li>
            )}




          </div>


          

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-links">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-links" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-links">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-links">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        

        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/adventure" component={Adventure} />
            <Route path="/luxury" component={Luxury} />
            <Route path="/Tour" component={Journey} />
            <Route path="/Food" component={Food} />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default App;

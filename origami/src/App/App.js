import React from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Posts from "../Publications/Posts/Posts";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePost from "../Publications/CreatePost/CreatePost";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import userService from "../services/user-service";

function render(title, Cmp, otherProps) {
  return function(props) {
    return (
      <Main title={title}>
        <Cmp {...props} {...otherProps} />
      </Main>
    );
  };
}

function parseCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {});
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = !!cookies["x-auth-token"];
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push("/");
      return null;
    });
  };

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push("/");
    });
  };

  render() {
    const { isLogged } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation isLogged={isLogged} />
          <div className="Container">
            <Aside isLogged={isLogged} />
            <Switch>
              <Route path="/" exact render={render("Publications", Posts)} />
              <Route path="/post" exact component={CreatePost} />
              <Route path="/register" render={render("Register", Register)} />
              <Route
                path="/logout"
                render={render("Logout", Logout, { isLogged, logout: this.logout })}
              />
              <Route
                path="/login"
                render={render("Login", Login, { isLogged, login: this.login })}
              />
              <Route path="/profile" exact component={Profile} />
              <Route path="*" render={(render("Not Found"), NotFound)} />
            </Switch>
          </div>
          <Footer isLogged={isLogged} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

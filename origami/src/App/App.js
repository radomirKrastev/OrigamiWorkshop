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
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function render(title, Component) {
  return function() {
    return (
      <Main title={title}>
        <Component />
      </Main>
    );
  };
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="Container">
          <Aside />
          {/* <Main>Publications</Main> */}
          <Switch>
            <Route path="/" exact render={render("Publications", Posts)} />
            <Route path="/post" exact component={CreatePost} />
            {/* <Route path="/post" render={(render("CreatePost"), CreatePost)} /> */}
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={Profile} />
            {/* <Route path="/profile" render={(render("Profile"), Profile)} /> */}
            {/* <Route path="*">404</Route> */}
            <Route path="*" render={(render("Not Found"), NotFound)} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Posts from "../Posts/Posts";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main>
          Sooooooooooome Heading
          <Posts />
        </Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

//Import Pages
import Nav from "./Components/Nav"
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs"
import OurWork from "./Pages/OurWork"

//import GlobalStayle
import GlobalStyle from "./Components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />

      <Switch >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

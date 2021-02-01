import React from "react";

//Import Pages
import Home from "./Pages/Home";

//import GlobalStayle
import GlobalStyle from "./Components/GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;

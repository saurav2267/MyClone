import Reactt, { useState } from "react";
import ReactDOM from "react-dom";
import Video from "./Video";
import SearchArea from "./SearchArea";
import { Router, Link } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

const App = () => {
  const themeColor = useState("darkblue");
  return (
    <ColorContext.Provider value={themeColor}>
      <div>
        <header>
          <Link to="/">MyClone</Link>
        </header>
        <Router>
          <SearchArea path="/" />
          <WatchArea path="/watch/:id" />
        </Router>
      </div>
    </ColorContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

import React from "react";
import Book from "./components/Book";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Create from "./components/Create";
import CreateNew from "./components/CreateNew";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./Root.css";

import book from "../static/images/road_to_learn_react.jpg";

const title = `My title`;
const description = `Swipe at owner's legs purr like an angel. `;

const bookParams = {
  img: book,
  title,
  description,
  price: "$99.99"
};

function Results() {
  return (
    <div className="Root">
      <NavBar />
      <Search />
      <div className="Root-books">
        <Book {...bookParams} />
        <Book {...bookParams} />
        <Book {...bookParams} />
        <Book {...bookParams} />
        <Book {...bookParams} />
        <Book {...bookParams} />
        <Book {...bookParams} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="Root">
      <div className="Home-fullscreen-background">
        <div className="Home-fullscreen-search">
          <Search />
        </div>
      </div>
      <div className="Home-options">
        <div>
          <h2>Browse</h2>
        </div>
        <div>
          <h2>
            <a href="/create">Sell</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Results} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/create/new" component={CreateNew} />
    </Router>
  );
}

export default withRouter(Root);
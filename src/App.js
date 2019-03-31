import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import Income from "./Components/Income/Income";
import Expense from "./Components/Expense/Expense";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/expense" component={Expense} />
        <Route path="/income" component={Income} />
      </div>
    </Router>
  );
};

export default App;

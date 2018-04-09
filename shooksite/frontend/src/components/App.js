import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./Profile";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path = "/" component={Home} />
      <Route path = "/profile" component={Profile} />
      <DataProvider endpoint="api/shook/"
                    render={(data) => <Table data={data} />} />
      <Form endpoint="api/shook/" />
    </div>
  </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

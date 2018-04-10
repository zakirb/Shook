import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";
import Home from "./Home";
import Nav from "./Nav";
import Profile from "./Profile";
import auth from '../auth';
import Login from './Login';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const App = () => (
    <Router history={Router.browserHistory}>
      <div>
      <Nav />
      <Route path = "/login/" component={Login} />
      <Route exact path="/" render={() => (
        (auth.loggedIn()) ? (
          <Redirect to="/profile"/>
        ) : (
          <Home/>
        ))} />
      <Route path = "/profile" component={Profile} />
      {/* <DataProvider endpoint="api/shook/"
                    render={(data) => <Table data={data} />} /> */}
      {/* <Form endpoint="api/shook/" /> */}
      </div>
    </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

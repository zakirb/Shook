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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/login/',
            state: {nextPathname: '/'}
        })
    }
}

const App = () => (
    <Router history={Router.browserHistory}>
      <div>
      <Nav />
      <Route path = "/login/" component={Login} />
      <Route path='/' component={Home} onEnter={requireAuth} />
      <Route path = "/profile" component={Profile} />
      {/* <DataProvider endpoint="api/shook/"
                    render={(data) => <Table data={data} />} /> */}
      {/* <Form endpoint="api/shook/" /> */}
      </div>
    </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

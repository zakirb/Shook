import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <div>
    {/*}<Router>
      <Nav />
      <Route exact path = "/" component={Home} />*/}
      <DataProvider endpoint="api/shook/"
                    render={(data, refresh) => <Table data={data} refresh={refresh} />} />
      <Form endpoint="api/shook/" />
    {/*</Router>*/}
  </div>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

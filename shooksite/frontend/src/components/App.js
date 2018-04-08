import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";

const App = () => (
  <div>
    <DataProvider endpoint="api/shook/"
                  render={data => <Table data={data} />} />
    <Form endpoint="api/shook/login" />
    <Tester />
  </div>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

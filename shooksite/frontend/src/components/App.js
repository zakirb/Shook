import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";

const App = () => (
  <div>
    <DataProvider endpoint="api/shook/"
                  render={(data, refresh) => <Table data={data} refresh={refresh} />} />
    <Form endpoint="api/shook/" />
  </div>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./Components/project/AddProject";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/addProject" component={AddProject}></Route>
      </Router>
    </div>
  );
}

export default App;

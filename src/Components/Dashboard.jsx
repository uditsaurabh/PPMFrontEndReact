import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="App.css" />
        <title>PPM Tool</title>
        {/* Spring Boot / React Students please ignore above */}

        {/* Dashboard Component (Project Item included) */}
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />

                {/*--button-->*/}
                <CreateProjectButton></CreateProjectButton>
                <br />
                <hr />
                <ProjectItem></ProjectItem>
              </div>
            </div>
          </div>
        </div>
        {/* End of Dashboard Component */}
        {/* Spring Boot / React Students please ignore below */}
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    );
  }
}

export default Dashboard;

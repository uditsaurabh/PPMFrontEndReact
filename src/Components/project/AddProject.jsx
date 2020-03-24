import React, { Component } from "react";

export class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: ""
    };
  }
  updateStateOnChange = value => {
    this.setState(value);
    console.log("state", this.state);
    console.log("value", value);
  };
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">
                Create / Edit Project form
              </h5>
              <hr />
              <form
                onSubmit={e => {
                  e.preventDefault();
                  console.log(this.state);
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={e => {
                      this.updateStateOnChange({ projectName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    onChange={e => {
                      this.updateStateOnChange({
                        projectIdentifier: e.target.value
                      });
                    }}
                  />
                </div>
                {/* disabled for Edit Only!! remove "disabled" for the Create operation */}
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={e => {
                      this.updateStateOnChange({ description: e.target.value });
                    }}
                  />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={this.state.start_date}
                    onChange={e => {
                      this.updateStateOnChange({ start_date: e.target.value });
                    }}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={this.state.end_date}
                    onChange={e => {
                      this.updateStateOnChange({ end_date: e.target.value });
                    }}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;

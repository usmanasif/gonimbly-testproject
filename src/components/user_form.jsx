import React, { Component } from "react";
import "./styles/style.css";

const IMAGE_HOST = "https://robohash.org/";

class UserForm extends Component {
  state = {
    current_image_url: "",
    user_input: "",
    showImage: false
  };

  handleSearch = event => {
    this.setState({ user_input: event.target.value, showImage: false });
  };

  handleEnter = event => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = _ => {
    this.setState({
      current_image_url: IMAGE_HOST.concat(this.state.user_input),
      showImage: true
    });
  };

  render() {
    const { current_image_url, showImage } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-sm display-4 mt-5">Usman Asif</h1>
        </div>

        <div className="row row-alignment mt-5 ml-0">
          <input
            type="text"
            className="form-control col-md-3 col-10"
            placeholder="Enter anything..."
            onChange={this.handleSearch}
            onKeyPress={this.handleEnter}
          />
          <button
            className="btn btn-primary btn-sm btn-width col-md-1 col-10"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="row mt-4 row-alignment">
          {showImage && (
            <img
              src={current_image_url}
              className="img-fluid magictime spaceInRight"
              alt="robohash img"
            />
          )}
        </div>
      </div>
    );
  }
}

export default UserForm;

import React, { Component } from "react";
import "../styles/navbar.css";
import axios from "axios";

import uuid from "uuid";

import { connect } from "react-redux";
import * as IdeaActions from "../store/actions/idea";

class Navbar extends Component {
  contructor() {}
  createIdea = () => {
    this.props.setIdea({
      id: uuid.v4(),
      name: "new idea",
      description: "new idea description"
    });
  };
  saveAll = () => {
    axios
      .post("http://localhost:3500/api/ideas", {
        teste: "testador"
      })
      .then(res => res.data)
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <div className="myNavbar">
        <div className="navbar-wrapper">
          <button className="new-idea" onClick={this.createIdea}>
            New Idea
          </button>
          <button className="save-all" onClick={this.saveAll}>
            Save All
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ideas: state.idea.ideas
});

const mapDispatchToProps = dispatch => ({
  setIdea: newIdea => dispatch(IdeaActions.setIdea(newIdea))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

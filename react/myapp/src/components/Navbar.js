import React, { Component } from "react";
import "../styles/navbar.css";

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
  render() {
    return (
      <div className="myNavbar">
        <div className="navbar-wrapper">
          <button className="new-idea" onClick={this.createIdea}>
            New Idea
          </button>
          <button className="save-all">Save All</button>
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

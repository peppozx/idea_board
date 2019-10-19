import React, { useState } from "react";
import IdeaItem from "./IdeaItem";
import { connect } from "react-redux";
import axios from "axios";
import * as IdeaActions from "../store/actions/idea";

import "../styles/ideawrapper.css";

class IdeaWrapper extends React.Component {
  componentDidMount() {
    let req = axios.get("http://localhost:3500/api/ideas");
    req
      .then(res => res.data)
      .then(data => {
        this.props.updateAll(data);
      });
  }
  render() {
    return (
      <div className="ideaWrapper">
        <div className="idea-item">
          {this.props.ideas.map(idea => (
            <IdeaItem
              key={idea.id}
              name={idea.name}
              id={idea.id}
              description={idea.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ideas: state.idea.ideas
});

const mapDispatchToProps = dispatch => ({
  setIdea: newIdea => dispatch(IdeaActions.setIdea(newIdea)),
  updateAll: ideas => dispatch(IdeaActions.updateAll(ideas))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaWrapper);

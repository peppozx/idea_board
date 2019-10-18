import React, { useState } from "react";
import IdeaItem from "./IdeaItem";
import { connect } from "react-redux";

import * as IdeaActions from "../store/actions/idea";

import "../styles/ideawrapper.css";

const IdeaWrapper = ({ ideas }) => {
  return (
    <div className="ideaWrapper">
      <div className="idea-item">
        {ideas.map(idea => (
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
};

const mapStateToProps = state => ({
  ideas: state.idea.ideas
});

const mapDispatchToProps = dispatch => ({
  setIdea: newIdea => dispatch(IdeaActions.setIdea(newIdea))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaWrapper);

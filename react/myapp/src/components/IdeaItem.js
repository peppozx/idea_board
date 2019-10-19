import React, { useState } from "react";
import "../styles/ideaitem.css";

import { connect } from "react-redux";

import * as IdeaActions from "../store/actions/idea";

function IdeaItem({ id, name, description, updateIdea }) {
  const [idea, setIdea] = useState({
    id: id,
    name: name,
    description: description
  });
  const setThisIdea = e => {
    setIdea({
      ...idea,
      [e.target.name]: e.target.value
    });
  };
  const updateThisIdea = e => {
    updateIdea({
      ...idea
    });
  };
  return (
    <div className="ideaItem" id={idea.id}>
      <input
        className="idea-name"
        placeholder={idea.name}
        name="name"
        value={idea.name}
        onChange={setThisIdea}
      />
      <input
        className="idea-description"
        value={idea.description}
        placeholder={idea.description}
        name="description"
        onChange={setThisIdea}
      />
      <button className="save-idea" onClick={updateThisIdea}>
        Save
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  ideas: state.idea.ideas
});

const mapDispatchToProps = dispatch => ({
  updateIdea: updatedIdea => dispatch(IdeaActions.updateIdea(updatedIdea))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaItem);

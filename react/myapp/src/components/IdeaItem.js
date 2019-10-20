import React, { useState } from "react";
import "../styles/ideaitem.css";
import axios from "axios";

import { connect } from "react-redux";

import * as IdeaActions from "../store/actions/idea";

function IdeaItem({ id, name, description, updateIdea, deleteIdea }) {
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
    updateIdea({
      ...idea
    });
  };
  const deleteThisIdea = () => {
    axios
      .post("http://localhost:3500/api/ideas/del", {
        idea
      })
      .then(res => {
        console.log(res);
      });
    deleteIdea(idea);
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
      <span className="delete-idea" onClick={deleteThisIdea}>
        x
      </span>
    </div>
  );
}

const mapStateToProps = state => ({
  ideas: state.idea.ideas
});

const mapDispatchToProps = dispatch => ({
  updateIdea: updatedIdea => dispatch(IdeaActions.updateIdea(updatedIdea)),
  deleteIdea: deletedIdea => dispatch(IdeaActions.deleteIdea(deletedIdea))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaItem);

export function setIdea(newIdea) {
  return {
    type: "SET_IDEA",
    newIdea
  };
}

export function updateIdea(updatedIdea) {
  return {
    type: "UPDATE_IDEA",
    updatedIdea
  };
}

export function saveIdeas() {
  return {
    type: "SAVE_IDEAS"
  };
}

export function updateAll(ideas) {
  return {
    type: "GET_IDEAS",
    ideas
  };
}

export function deleteIdea(idea) {
  return {
    type: "DELETE_IDEA",
    idea
  };
}

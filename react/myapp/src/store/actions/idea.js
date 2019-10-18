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

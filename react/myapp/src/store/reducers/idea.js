import axios from "axios";

const INITIAL_STATE = {
  ideas: [
    {
      id: 1,
      name: "Idea 1",
      description: "Description of idea 1"
    },
    {
      id: 2,
      name: "Idea 2",
      description: "Description of idea 2"
    },
    {
      id: 3,
      name: "Idea 3",
      description: "Description of idea 3"
    }
  ]
};

function updateIdea(state, updatedIdea) {
  const newIdeas = state.ideas;
  newIdeas.forEach(idea => {
    if (idea.id === updatedIdea.id) {
      idea.name = updatedIdea.name;
      idea.description = updatedIdea.description;
    }
  });
  return newIdeas;
}

function saveIdeas(state) {
  axios
    .post("http://localhost:3500/api/ideas", state.ideas)
    .then(res => res.data)
    .then(data => {
      console.log(data);
    });
}

function idea(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_IDEA":
      return {
        ...state,
        ideas: [
          ...state.ideas,
          {
            id: action.newIdea.id,
            name: action.newIdea.name,
            description: action.newIdea.description
          }
        ]
      };
    case "UPDATE_IDEA":
      const newIdeas = updateIdea(state, action.updatedIdea);
      return {
        ...state,
        ideas: [...newIdeas]
      };
      break;
    case "SAVE_IDEAS":
      saveIdeas(state);
      return state;
      break;
    case "GET_IDEAS":
      return {
        ...state,
        ideas: [...action.ideas.ideas]
      };
      break;
  }
  return state;
}

export default idea;

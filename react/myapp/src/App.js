import React from "react";

import { Provider } from "react-redux";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import IdeaWrapper from "./components/IdeaWrapper";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Navbar />
        <IdeaWrapper />
      </Provider>
    </div>
  );
}

export default App;

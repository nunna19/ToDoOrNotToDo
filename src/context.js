import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    "Get Beer",
    "Drink Beer",
    "Sleep",
    "Go to work"
  ]
});

export default Store;

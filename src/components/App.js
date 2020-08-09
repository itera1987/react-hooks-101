import React, { useReducer } from 'react';

import EventForm from "./EventForm"
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={ "Fuck you" }>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />      
      </div>
    </AppContext.Provider>
  );
}

export default App;

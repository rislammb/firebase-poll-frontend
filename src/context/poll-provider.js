import React, { createContext, useReducer } from 'react';
import { createActions } from './actions';
import { reducer, initialState } from './reducers';

const PollContext = createContext();

const PollProvider = props => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return (
    <PollContext.Provider value={{ store, actions }}>
      {props.children}
    </PollContext.Provider>
  );
};

export { PollProvider, PollContext };

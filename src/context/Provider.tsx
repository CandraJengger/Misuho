import React, { createContext, useReducer } from 'react';
import InitialStateType from '../types/InitialState.type';
import initialStates from './initialStates';
import misuhReducer from './reducers';

type Props = {
  children: React.ReactNode;
};

const GlobalContext = createContext<{
  misuhState: InitialStateType;
  misuhDispatch: React.Dispatch<any>;
}>({
  misuhState: initialStates,
  misuhDispatch: () => null,
});

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [misuhState, misuhDispatch] = useReducer(misuhReducer, initialStates);

  return (
    <GlobalContext.Provider value={{ misuhState, misuhDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };

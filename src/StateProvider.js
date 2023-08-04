import React, {createContext, useContext, useReducer} from 'react'
export const StateContext = createContext();
export const StateProvider = ({reducer, inititialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, inititialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
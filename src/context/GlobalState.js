import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'To Kill a Mockingbird', amount: -40 },
        { id: 2, text: 'Red or Dead', amount: 270 },
        { id: 3, text: 'A Tale of Two Cities', amount: -80 },
        { id: 4, text: 'Mrs Dalloway', amount: 250 },
    ],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

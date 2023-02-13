import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        { id: 2, text: 'Credit', amount: 770 },
        { id: 1, text: 'To Kill a Mockingbird', amount: -40 },
        { id: 4, text: 'Cash', amount: 250 },
        { id: 3, text: 'Stationery', amount: -80 },
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

import React, { useEffect, useReducer } from 'react';
import UserContext from './UserContext';

const initialState = {
  data:localStorage.getItem('data'),
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA':
      return {...state,data:data}
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('log', state.log);
    localStorage.setItem('sign', state.sign);
    localStorage.setItem('wel', state.wel);
  }, [state]);

  const value = {
    state,
    dispatch,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
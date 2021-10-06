import React from "react";
import { StoreProvider } from 'react-redux'
import { userStoreContext } from 'react-redux';
import store from './store';

const useStoreContext = createContext();
const { Provider } = StoreContext;

function StoreProvider(props) {
  return <Provider store={store} {...props} />;
};

function useStoreContext(props) {
    return <Provider store={store} {...props} />;
  }

export default { StoreProvider, useStoreContext };







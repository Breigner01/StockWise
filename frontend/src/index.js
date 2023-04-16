import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from '@apollo/client';
import client from "./Apollo";

import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import { loadUser } from "./redux/actions/authActions";

const Root = () => {
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);

    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ReduxProvider>
      </ApolloProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

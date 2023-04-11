import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AuthAlerts from './components/layout/AuthAlerts';

import { loadUser } from "./redux/actions/authActions";

const Root = () => {
    const alertOptions = {
      timeout: 3000,
      position: "top center"
    };

    useEffect(() => {
      store.dispatch(loadUser());
    }, []);

    return (
      <ReduxProvider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <React.StrictMode>
            <AuthAlerts />
            <App />
          </React.StrictMode>
        </AlertProvider>
      </ReduxProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

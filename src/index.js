import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import userApp from "./components/store/AppStore";
const userAppStore = createStore(userApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userAppStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

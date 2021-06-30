import React from "react";
import ReactDOM from "react-dom";
import {
  FirebaseAppProvider
} from "reactfire";

import App from "./App";
import firebaseConfig from "./firebaseConfig"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

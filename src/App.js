import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import firebase from "firebase";
import "firebase/firestore";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Product from "./pages/Product";

// function AnimatedSwitch() {
//   const location = useLocation();
//   return (
//     <TransitionGroup>
//       <CSSTransition>
//         <Switch>
//           <Route exact={true} path="/" component={Home} />
//           <Route path="/product/:id" component={Product} />
//           <Route path="/admin" component={Admin} />
//         </Switch>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

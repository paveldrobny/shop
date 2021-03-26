import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  HashRouter,
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import "firebase/firestore";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./pages";

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
      <HashRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Page.Home} />
          <Route path="/browse" component={Page.Browse} />
          <Route path="/admin" component={Page.Admin} />
          <Route path="/product/:id" component={Page.Product} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

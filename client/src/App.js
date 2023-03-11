import React from "react";
import './App.css';
// import { Activity } from "./pages/Activity";
// import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
// import { Details } from "./pages/Details";
// import { NotFound } from "./pages/NotFound";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home/>
    </div>
  //  <Router>
  //   <Switch>
  //     {/* <Route exact path="/" element={<Landing />} /> */}
  //     <Route exact path="/home" element={<Home />} />
  //     {/* <Route exact path="/details" element={<Details />} />
  //     <Route exact path="/activity" element={<Activity />} />
  //     <Route path="*" element={<NotFound />} /> */}
  //   </Switch>
  //  </Router>
  );
}

export default App;

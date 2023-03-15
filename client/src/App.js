import React from "react";
import './App.css';
import { Switch as Routes, Route } from 'react-router-dom';
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { CountryDetails } from './components/CountryDetails';
import { Activity } from "./pages/Activity";
import { SaveActivity } from './pages/SaveActivity';
import { Favorites } from './pages/Favorites'
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";




function App() {
  return (
    <>

<Routes>
      <Route path="/" component={Landing} exact />
      <Route path="/home" exact>
        <NavBar />
        <Home />
      </Route>
      <Route path="/details" exact>
        <NavBar />
        <CountryDetails />
      </Route>
      <Route path="/create" exact>
       
        <SaveActivity />
      </Route>
      <Route path="/activity" exact>
        <NavBar />
        <Activity />
      </Route>
      <Route path="/favorites" exact>
        <NavBar />
        <Favorites />
      </Route>
      <Route path="*" component={NotFound} exact />
    </Routes>
    </>
  );
}

export default App;
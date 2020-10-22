import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Header from "./components/header";
import data from "./components/yourdata";

function App() {
  return (
    <BrowserRouter>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <Switch>
      <Route path="/skills">
          <Skills/>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}


export default App;

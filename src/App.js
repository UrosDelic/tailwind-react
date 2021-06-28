import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Playground from "./components/Playground/Playground";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginForm></LoginForm>
          </Route>
          <Route exact path='/playground'>
            <Playground></Playground>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import LoginFormFn from "./test/LoginFormFn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Playground from "./test/Playground";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginFormFn></LoginFormFn>
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

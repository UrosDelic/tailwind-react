import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SignUpForm from "./components/Signup/SignUpForm.jsx";
import UsersPage from "./components/UsersPage/UsersPage";
import SingleUserPage from "./components/UserPage/SingleUserPage";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginForm></LoginForm>
          </Route>
          <Route exact path='/users'>
            <UsersPage></UsersPage>
          </Route>
          <Route path='/users/:id'>
            <SingleUserPage></SingleUserPage>
          </Route>
          <Route exact path='/signup'>
            <SignUpForm></SignUpForm>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

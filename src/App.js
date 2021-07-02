import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SignUpForm from "./components/Signup/SignUpForm.jsx";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UserPage/UserPage";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginForm></LoginForm>
          </Route>
          <Route exact path='/usersPage'>
            <UsersPage></UsersPage>
          </Route>
          <Route path='/userPage/:id'>
            <UserPage></UserPage>
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

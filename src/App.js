import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SignUpForm from "./components/Signup/SignUpForm.jsx";
import UsersPage from "./components/UsersPage/UsersPage";
import SingleUserPage from "./components/UserPage/SingleUserPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import TestPage from "./components/TestComponents/TestPage";
import auth from './components/protectedRoute/Auth'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginForm ></LoginForm>
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
          {/* <Route exact path="/testPage" component={TestPage} /> */}
          <ProtectedRoute exact path="/testPage" component={TestPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

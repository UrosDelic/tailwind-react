import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import SignUpForm from "./components/Signup/SignUpForm.jsx";
import UsersPage from "./components/UsersPage/UsersPage";
import SingleUserPage from "./components/UserPage/SingleUserPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <LoginForm></LoginForm>
          </Route>
          <ProtectedRoute exact path='/users' component={UsersPage} />
          <ProtectedRoute path='/users/:id' component={SingleUserPage} />
          <Route exact path='/signup'>
            <SignUpForm></SignUpForm>
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

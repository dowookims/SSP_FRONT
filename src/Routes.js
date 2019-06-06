import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from "./components/main/main"
import SignUp from "./components/signup/signup"
import Footer from "./components/footer/footer"

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    
    
  </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/login" component={Footer} />
        <Route exact path="/signup" component={SignUp} />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn? <LoggedInRoutes /> : <LoggedOutRoutes/>    
)

export default AppRouter;
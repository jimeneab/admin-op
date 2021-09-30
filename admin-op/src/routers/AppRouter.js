import React from "react";
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Accounts from '../pages/Accounts'
import Teams from "../pages/Teams";
import Users from "../pages/Users";
import NavbarLogged from "../pages/NavbarLogged";
import Footer   from "../pages/Footer"
import Singup from "../pages/Singup"
import NewAccount from "../pages/NewAccount"
import NewCustomer from "../pages/NewCustomer"
import NewTeam from "../pages/NewTeam"
import Profile from "../pages/Profile"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PivateRoute";
import Login from "../pages/Login"

export default function AppRouter(){
    return(
        <Router>
            <NavbarLogged/>
            <Switch>
                <Route  exact path='/accounts' component={Accounts}/>
                <Route  exact path='/login' component={Login}/>
                <Route  exact path='/teams' component={Teams}/>
                <PrivateRoute  exact path='/users' component={Users}/>
                <Route  exact path='/singup' component={Singup}/>
                <Route  exact path='/profile' component={Profile}/>
                <Route  exact path='/new-account' component={NewAccount}/>
                <Route  exact path='/new-customer' component={NewCustomer}/>
                <Route  exact path='/new-team' component={NewTeam}/>
                <Route  exact path='/' component={Home}/>
                <Route  path='*' component={NotFound}/>
            </Switch>
            <Footer/>
        </Router>
    )
}
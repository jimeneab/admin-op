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
import Customers from "../pages/Customers";
import useAuth from "../Auth/useAuth";

export default function AppRouter(){

    const auth = useAuth()

    return(
        <Router>
           <NavbarLogged/>
            <Switch>
                <PrivateRoute  exact path='/accounts' component={Accounts}/>
                <PrivateRoute  exact path='/customers' component={Customers}/>
                <Route  exact path='/login' component={Login}/>
                <PrivateRoute  exact path='/teams' component={Teams}/>
                <PrivateRoute  exact path='/users' component={Users}/>
                <PrivateRoute  exact path='/singup' component={Singup}/>
                <PrivateRoute  exact path='/profile' component={Profile}/>
                <PrivateRoute  exact path='/new-account' component={NewAccount}/>
                <PrivateRoute exact path='/new-customer' component={NewCustomer}/>
                <PrivateRoute  exact path='/new-team' component={NewTeam}/>
                <PrivateRoute  exact path='/' component={Home}/>
                <Route  path='*' component={NotFound}/>
            </Switch>
            <Footer/>
        </Router>
    )
}
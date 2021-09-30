import React from "react";
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../Auth/useAuth'
export default function PrivateRoute({component: Component, ...res}){

    const { user, login, logout, islogged } = useAuth()

    return(
        <Route {...res}>
            {islogged() ? 
            <Component/>
            :
            <Redirect to='/Login'/>
}
        </Route>
    )
}
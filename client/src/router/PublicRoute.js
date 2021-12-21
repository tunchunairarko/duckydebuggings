import React from 'react';
import { Routes,Route, Navigate  } from 'react-router-dom';


export default function PublicRoute ({component: Component, restricted, ...rest}) {
    const isLogin = () => {
        if (localStorage.getItem("auth-token")) {
            return true;
        }
    
        return false;
    }
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Routes>
            <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Navigate to="/dashboard" />
            : <Component {...props} />
        )} />
        </Routes>
    );
};


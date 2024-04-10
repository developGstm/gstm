import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const Auth = ( { children } ) => {
    const user = useSelector((state) => state.user);

    if(user?.activeLogin) {
        return (
            <>{ children }</> 
            )
    }else {
        return (
             <Navigate replace to="/" /> 
            )
    }

}

export default Auth
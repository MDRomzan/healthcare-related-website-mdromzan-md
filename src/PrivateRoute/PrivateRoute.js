import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest })=> {
    const {user,isloading}=useAuth();
    if(isloading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
                render={({ location }) =>
                    user.email ? (
                     children
                      ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
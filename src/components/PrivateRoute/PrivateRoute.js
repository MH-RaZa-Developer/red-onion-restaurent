import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { foodContext } from '../../App';


const PrivateRoute = ({children, ...rest}) => {

    const { log } = useContext(foodContext);
  
    const [LoggedInUser, setLoggedInUser] = log;

    return (
        <Route
      {...rest}
      render={({ location }) =>
        LoggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
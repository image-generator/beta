import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import shortid from 'shortid';

import Routes from '../../routes/Routes';
import Redirects from '../../routes/Redirects';


function Main() {
  return (
    <Switch>
      {Redirects.map((redirect) => (
        <Redirect
          exact
          path={redirect.path}
          to={redirect.to}
          key={shortid.generate()}
        />
      ))}

      {Routes.map((route) => (
        <Route
          exact
          path={route.path}
          key={shortid.generate()}
        >
          <route.component />
        </Route>
      ))}

    </Switch>
  );
}

export default Main;

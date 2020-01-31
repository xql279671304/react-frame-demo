import React from 'react';
import {
  Switch
} from 'react-router-dom';
import { RouteWithSubRoutes } from '../../assets/common';
import { RouteInterface } from '../../assets/interface';

const Other = ({ routes } : { routes: any }) => {
  return (
    <div>
      <h1>Other 其他</h1>

      <Switch>
        {routes.map((route: RouteInterface, i: number) => {
          return RouteWithSubRoutes(route, i)
        })}
      </Switch>
    </div>
  )
}

export default Other;

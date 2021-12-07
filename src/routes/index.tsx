import { Router, Switch } from 'react-router-dom';
import { FC } from 'react';

import { history } from './history';

const Routing: FC = () => {
  return (
    <Router history={history}>
      <Switch></Switch>
    </Router>
  );
};

export default Routing;

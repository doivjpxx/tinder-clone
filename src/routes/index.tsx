import { Route, Router, Switch } from 'react-router-dom';
import { FC } from 'react';

import { history } from './history';
import loadable from '@loadable/component';

const Home = loadable(() => import('pages/Home'));

const Routing: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;

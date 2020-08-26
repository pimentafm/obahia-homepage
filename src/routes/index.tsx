import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Informations from '../pages/Informations';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/informations" component={Informations} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;

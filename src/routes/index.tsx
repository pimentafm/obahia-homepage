import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Governance from '../pages/Governance';
import RuralProfitability from '../pages/RuralProfitability';
import Informations from '../pages/Informations';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/governance" component={Governance} />
    <Route path="/ruralprofitability" component={RuralProfitability} />
    <Route path="/informations" component={Informations} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;

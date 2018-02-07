import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';

// Community Members pages
import Monte from './members/MonteThakkar';
import William from './members/WilliamHua';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/monte" component={Monte} />
        <Route path="/william" component={William} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;

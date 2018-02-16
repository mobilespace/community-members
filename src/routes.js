import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';

// Community Members pages
import MonteDashboard from './members/MonteThakkar/Dashboard';
import MontePortfolio from './members/MonteThakkar/Portfolio';
import MonteProfile from './members/MonteThakkar/Profile';
import MonteLocked from './portals/MonteThakkar'

import RyanLocked from './portals/RyanLiszewski';
import RyanDashboard from './members/RyanLiszewski/Dashboard';
import RyanSettings from './members/RyanLiszewski/Settings';


import William from './members/WilliamHua';
import Teodora from './members/TeodoraCaneva';
import Prakash from './members/PrakashGurung';
import Emanuel from './members/EmanuelSaunders';
import Nicholas from './members/NicholasSzeto';
import Jahon from './members/JakhongirKhusanov';
import Sukhjit from './members/SukhjitSingh';
import Mitul from './members/MitulSavani';
import Thomas from './members/ThomasZhu';
import Bhavesh from './members/BhaveshChowdhury';
import Girish from './members/GirishRawat';
import Affaan from './members/AffaanGhazzali';
import Karan from './members/KaranGupta';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />

        <Route exact path="/monte" component={MonteDashboard} />
        <Route path="/monte/dashboard" component={MonteDashboard} />
        <Route path="/monte/portfolio" component={MontePortfolio} />
        <Route path="/monte/profile" component={MonteProfile} />
        <Route path="/monte/locked" component={MonteLocked} />

        <Route path="/william" component={William} />
        <Route path="/teodora" component={Teodora} />
        <Route path="/prakash" component={Prakash} />
        <Route path="/emanuel" component={Emanuel} />
        <Route path="/affaan" component={Affaan} />
        <Route path="/nicholas" component={Nicholas} />
        <Route path="/jahon" component={Jahon} />
        <Route path="/sukhjit" component={Sukhjit} />
        <Route path="/mitul" component={Mitul} />

        <Route exact path="/ryan" component={RyanDashboard} />
        <Route path="/ryan/locked" component={RyanLocked} />
        <Route path="/ryan/settings" component={RyanSettings} />

        <Route path="/thomas" component={Thomas} />
        <Route path="/bhavesh" component={Bhavesh} />
        <Route path="/girish" component={Girish} />
        <Route path="/karan" component={Karan} />
      </Switch>
    </Router>
  )
}

export default Routes;

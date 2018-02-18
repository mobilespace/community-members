import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';

// Community Members pages
import MonteDashboard from './members/MonteThakkar/Dashboard';
import MontePortfolio from './members/MonteThakkar/Portfolio';
import MonteProfile from './members/MonteThakkar/Profile';
import MonteLocked from './portals/MonteThakkar';



// add new routes

import GirishDashboard from './members/GirishRawat/Dashboard';
import GirishPortfolio from './members/GirishRawat/Portfolio';
import GirishGraphs from './members/GirishRawat/Graphs';
import GirishProfile from './members/GirishRawat/Profile';
import GirishLocked from './portals/GirishRawat'

import William from './members/WilliamHua';
import Teodora from './members/TeodoraCaneva';

import Emanuel from './members/EmanuelSaunders';
import Nicholas from './members/NicholasSzeto';
import Jahon from './members/JakhongirKhusanov';
import Sukhjit from './members/SukhjitSingh';

import Ryan from './members/RyanLiszewski';

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

        <Route exact path="/girish" component={GirishProfile} />        
        <Route path="/girish/portfolio" component={GirishPortfolio} />
        <Route path="/girish/graphs" component={GirishGraphs} />
        <Route path="/girish/profile" component={GirishProfile} />        
        <Route path="/girish/locked" component={GirishLocked} />

        <Route path="/william" component={William} />
        <Route path="/teodora" component={Teodora} />
        <Route path="/emanuel" component={Emanuel} />
        <Route path="/affaan" component={Affaan} />
        <Route path="/nicholas" component={Nicholas} />
        <Route path="/jahon" component={Jahon} />
        <Route path="/sukhjit" component={Sukhjit} />
        <Route path="/ryan" component={Ryan} />
        <Route path="/bhavesh" component={Bhavesh} />
        <Route path="/girish" component={Girish} />
        <Route path="/karan" component={Karan} />
      </Switch>
    </Router>
  )
}
export default Routes;

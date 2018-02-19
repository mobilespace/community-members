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

import MitulDashboard from './members/MitulSavani/Dashboard'; 
import MitulLocked from './portals/MitulSavani';
import MitulPortfolio from './members/MitulSavani/Portfolio';
import MitulProfile from './members/MitulSavani/Profile';

import NicholasDashboard from './members/NicholasSzeto/Dashboard';
import NicholasPortfolio from './members/NicholasSzeto/Portfolio';
import NicholasProfile from './members/NicholasSzeto/Profile';
import NicholasLocked from './portals/NicholasSzeto'

import BhaveshProfile from './members/BhaveshChowdhury/Profile';
import BhaveshDashboard from './members/BhaveshChowdhury/Dashboard';
import BhaveshLocked from './portals/BhaveshChowdhury'
import BhaveshPortfolio from './members/BhaveshChowdhury/Portfolio';

import RyanLocked from './portals/RyanLiszewski';
import RyanDashboard from './members/RyanLiszewski/Dashboard';
import RyanSettings from './members/RyanLiszewski/Settings';
import RyanProfile from './members/RyanLiszewski/Profile';
import RyanPortfolio from './members/RyanLiszewski/Portfolio';

import William from './members/WilliamHua';
import Teodora from './members/TeodoraCaneva';

import PrakashDashboard from './members/PrakashGurung/Dashboard';
import Prakash from './members/PrakashGurung';
import PrakashLocked from './portals/PrakashGurung'
import PrakashProfile from './members/PrakashGurung/Profile';
import PrakashPortfolio from './members/PrakashGurung/Portfolio';

import Emanuel from './members/EmanuelSaunders';
import Nicholas from './members/NicholasSzeto';
import Jahon from './members/JakhongirKhusanov';
import Sukhjit from './members/SukhjitSingh';
import Thomas from './members/ThomasZhu';

import ThomasDashboard from './members/ThomasZhu/Dashboard';
import ThomasPortfolio from './members/ThomasZhu/Portfolio';
import ThomasProfile from './members/ThomasZhu/Profile';
import ThomasLocked from './portals/ThomasZhu'

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

        <Route path="/nicholas/locked" component={NicholasLocked} />
        <Route exact path="/nicholas/dashboard" component={NicholasDashboard} />
        <Route path="/nicholas/portfolio" component={NicholasPortfolio} />
        <Route path="/nicholas/profile" component={NicholasProfile} /> 

        <Route path="/bhavesh/profile" component={BhaveshProfile} />
        <Route path="/bhavesh/dashboard" component={BhaveshDashboard} />
        <Route path="/bhavesh/portfolio" component={BhaveshPortfolio} />
        <Route path="/bhavesh/locked" component={BhaveshLocked} />
    
        <Route path="/william" component={William} />
        <Route path="/teodora" component={Teodora} />
        
        <Route exact path="/prakash" component={PrakashDashboard} />
        <Route path="/prakash/locked" component={PrakashLocked} />
        <Route path="/prakash/dashboard" component={PrakashDashboard}/>
        <Route path="/prakash/profile" component={PrakashProfile} />
        <Route path="/prakash/portfolio" component={PrakashPortfolio} />

        <Route path="/emanuel" component={Emanuel} />
        <Route path="/affaan" component={Affaan} />
        <Route path="/nicholas" component={Nicholas} />
        <Route path="/jahon" component={Jahon} />
        <Route path="/sukhjit" component={Sukhjit} />

        <Route exact path="/ryan" component={RyanDashboard} />
        <Route path="/ryan/locked" component={RyanLocked} />
        <Route path="/ryan/settings" component={RyanSettings} />
        <Route path="/ryan/profile" component={RyanProfile} />
        <Route path="/ryan/portfolio" component={RyanPortfolio} /> 

        <Route exact path="/mitul" component={MitulDashboard} />
        <Route path="/mitul/dashboard" component={MitulDashboard}/>
        <Route path="/mitul/locked" component={MitulLocked} />
        <Route path="/mitul/portfolio" component={MitulPortfolio} />
        <Route path="/mitul/profile" component={MitulProfile} />

        <Route exact path="/thomas" component={ThomasDashboard} />
        <Route path="/thomas/dashboard" component={ThomasDashboard} />
        <Route path="/thomas/portfolio" component={ThomasPortfolio} />
        <Route path="/thomas/profile" component={ThomasProfile} />
        <Route path="/thomas/locked" component={ThomasLocked} />
        
        <Route path="/girish" component={Girish} />
        <Route path="/karan" component={Karan} />
      </Switch>
    </Router>
  )
}
export default Routes;

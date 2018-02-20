import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

import TeodoraDashboard from './members/TeodoraCaneva/Dashboard';
import TeodoraPortfolio from './members/TeodoraCaneva/Portfolio';
import TeodoraProfile from './members/TeodoraCaneva/Profile';
import TeodoraLocked from './portals/TeodoraCaneva'

import PrakashDashboard from './members/PrakashGurung/Dashboard';
import PrakashLocked from './portals/PrakashGurung'
import PrakashProfile from './members/PrakashGurung/Profile';
import PrakashPortfolio from './members/PrakashGurung/Portfolio';

import EmanuelDashboard from './members/EmanuelSaunders/Dashboard';
import EmanuelPortfolio from './members/EmanuelSaunders/Portfolio';
import EmanuelProfile from './members/EmanuelSaunders/Profile';
import EmanuelLocked from './portals/EmanuelSaunders'

import SukhjitDashboard from './members/SukhjitSingh/Dashboard';
import SukhjitProfile from './members/SukhjitSingh/Profile';
import SukhjitPortfolio from './members/SukhjitSingh/Portfolio';
import SukhjitLocked from './portals/SukhjitSingh';

import JakhongirDashboard from './members/JakhongirKhusanov/Dashboard';
import JakhongirPortfolio from './members/JakhongirKhusanov/Portfolio';
import JakhongirProfile from './members/JakhongirKhusanov/Profile';
import JakhongirLocked from './portals/JakhongirKhusanov'

import Ryan from './members/RyanLiszewski';

import ThomasDashboard from './members/ThomasZhu/Dashboard';
import ThomasPortfolio from './members/ThomasZhu/Portfolio';
import ThomasProfile from './members/ThomasZhu/Profile';
import ThomasLocked from './portals/ThomasZhu'

import Bhavesh from './members/BhaveshChowdhury';
import Girish from './members/GirishRawat';
import Affaan from './members/AffaanGhazzali';

// import Karan from './members/KaranGupta';
import KaranDashboard from './members/KaranGupta/Dashboard';
import KaranPortfolio from './members/KaranGupta/Portfolio';
import KaranProfile from './members/KaranGupta/Profile';
import KaranLocked from './portals/KaranGupta';

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
        
        <Route exact path="/emanuel" component={EmanuelDashboard} />
        <Route path="/emanuel/profile" component={EmanuelProfile} />
        <Route path="/emanuel/locked" component={EmanuelLocked} />
        <Route path="/emanuel/dashboard" component={EmanuelDashboard} />
        <Route path="/emanuel/portfolio" component={EmanuelPortfolio} />
       
        <Route exact path="/teodora" component={TeodoraDashboard} />
        <Route path="/teodora/dashboard" component={TeodoraDashboard} />
        <Route path="/teodora/profile" component={TeodoraProfile} />
        <Route path="/teodora/portfolio" component={TeodoraPortfolio} />
        <Route path="/teodora/locked" component={TeodoraLocked} />
        
        <Route exact path="/prakash" component={PrakashDashboard} />
        <Route path="/prakash/locked" component={PrakashLocked} />
        <Route path="/prakash/dashboard" component={PrakashDashboard}/>
        <Route path="/prakash/profile" component={PrakashProfile} />
        <Route path="/prakash/portfolio" component={PrakashPortfolio} />

        <Route path="/affaan" component={Affaan} />

        <Route exact path="/sukhjit" component={SukhjitDashboard} />
        <Route path="/sukhjit/dashboard" component={SukhjitDashboard} />
        <Route path="/sukhjit/portfolio" component={SukhjitPortfolio} />
        <Route path="/sukhjit/profile" component={SukhjitProfile} />        
        <Route path="/sukhjit/locked" component={SukhjitLocked} />

        <Route exact path="/Jakhongir" component={JakhongirDashboard} />
        <Route path="/Jakhongir/dashboard" component={JakhongirDashboard} />
        <Route path="/Jakhongir/portfolio" component={JakhongirPortfolio} />
        <Route path="/Jakhongir/profile" component={JakhongirProfile} />
        <Route path="/Jakhongir/locked" component={JakhongirLocked} />

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
        
        {/* <Route path="/karan" component={Karan} /> */}
        <Route exact path="/karan" component={KaranDashboard} />
        <Route path="/karan/dashboard" component={KaranDashboard} />
        <Route path="/karan/portfolio" component={KaranPortfolio} />
        <Route path="/karan/profile" component={KaranProfile} />
        <Route path="/karan/locked" component={KaranLocked} />
        
        <Route path="/affaan" component={Affaan} />
        <Route path="/william" component={William} />
      </Switch>
    </Router>
  )
}
export default Routes;

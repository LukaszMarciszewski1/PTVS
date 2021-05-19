import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage';
import ScienceAndTechnology from './ScienceAndTechnology';
import CultureAndArt from './CultureAndArt';
import EntrepreneurshipAndWork from './EntrepreneurshipAndWork';
import HealthAndEcology from './HealthAndEcology';
import TourismAndRecreation from './TourismAndRecreation';
import SalesChannel from './SalesChannel';

const Page = () => {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path="/Nauka-i-technika" component={ScienceAndTechnology}/>
         <Route path="/Kultura-i-sztuka" component={CultureAndArt}/>
         <Route path="/Przedsiębiorczośc-i-praca" component={EntrepreneurshipAndWork}/>
         <Route path="/Zdrowie-i-ekologia" component={HealthAndEcology}/>
         <Route path="/Turystyka-i-rekreacja" component={TourismAndRecreation}/>
         <Route path="/Kanał-sprzedażowy" component={SalesChannel}/>
       </Switch>
    </Router>
  );
}

export default Page;
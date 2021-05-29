import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import ChanelScreen from './screens/ChanelScreen';
import SalesChanel from './screens/chanels/SalesChanel';
import TourismAndRecreation from './screens/chanels/TourismAndRecreation';
import ScienceAndTechnology from './screens/chanels/ScienceAndTechnology';
import CultureAndArt from './screens/chanels/CultureAndArt';
import HealthAndEcology from './screens/chanels/HealthAndEcology';
import EntrepreneurshipAndWork from './screens/chanels/EntrepreneurshipAndWork';
import ScrollToTop from './hooks/ScrollToTop'
//sss
function App() {
  return (
    <Router>
      <div>
      <ScrollToTop />
       <NavBar/>
       <main>
        <Switch>
            <Route path="/video/:id" component={VideoScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <ChanelScreen>
              <Switch>
                <Route path="/Nauka-i-Technika">
                  <ScienceAndTechnology />
                </Route>
                <Route path="/Kultura-i-sztuka">
                  <CultureAndArt />
                </Route>
                <Route path="/Przedsiebiorczosc-i-praca">
                  <EntrepreneurshipAndWork />
                </Route>
                <Route path="/Zdrowie-i-ekologia">
                  <HealthAndEcology />
                </Route>
                <Route path="/Turystyka-i-rekreacja">
                  <TourismAndRecreation />
                </Route>
                <Route path="/Kanal-sprzedazowy">
                  <SalesChanel />
                </Route>
              </Switch>
            </ChanelScreen>
        </Switch>
       </main>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;

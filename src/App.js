import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import ChanelScreen from './screens/ChanelScreen';
import SalesChanel from './screens/SalesChanel';
import TourismAndRecreation from './screens/TourismAndRecreation';
import ScienceAndTechnology from './screens/ScienceAndTechnology';
import CultureAndArt from './screens/CultureAndArt';
import HealthAndEcology from './screens/HealthAndEcology';
import EntrepreneurshipAndWork from './screens/EntrepreneurshipAndWork';
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <Router>
      <div>
      <ScrollToTop />
       <NavBar/>
       <main>
          <Route path="/video/:id" component={VideoScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/chenel/:category" component={ChanelScreen}></Route>
          <Route path="/Kanal-sprzedazowy" component={SalesChanel}></Route>
          <Route path="/Turystyka-i-rekreacja" component={TourismAndRecreation}></Route>
          <Route path="/Nauka-i-Tehnika" component={ScienceAndTechnology}></Route>
          <Route path="/Kultura-i-sztuka" component={CultureAndArt}></Route>
          <Route path="/Zdrowie-i-ekologia" component={HealthAndEcology}></Route>
          <Route path="/Przedsiebiorczosc-i-praca" component={EntrepreneurshipAndWork}></Route>
       </main>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;

{/* <Router>
<div>
 <NavBar/>
 <main>
    <Route path="/video/:id" component={VideoScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    <Route path="/chenel/:category" component={ChanelScreen}></Route>
    <Route path="/Kanal-sprzedazowy" component={SalesChanel}></Route>
    <Route path="/Turystyka-i-rekreacja" component={TourismAndRecreation}></Route>
    <Route path="/Nauka-i-Tehnika" component={ScienceAndTechnology}></Route>
    <Route path="/Kultura-i-sztuka" component={CultureAndArt}></Route>
    <Route path="/Zdrowie-i-ekologia" component={HealthAndEcology}></Route>
    <Route path="/Przedsiebiorczosc-i-praca" component={EntrepreneurshipAndWork}></Route>
 </main>
 <Footer/>
</div>
</Router> */}

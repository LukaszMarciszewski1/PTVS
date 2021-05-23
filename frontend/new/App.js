import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import ChanelScreen from './screens/ChanelScreen';
import SalesChanel from './screens/SalesChanel';

function App() {
  return (
    <Router>
      <div>
       <NavBar/>
       <main>
          <Route path="/video/:id" component={VideoScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/chenel" component={ChanelScreen}></Route>
          <Route path="/Kanal-sprzedazowy" component={SalesChanel}></Route>
       </main>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;

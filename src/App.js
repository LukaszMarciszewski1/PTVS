import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Patronite from './components/Patronite';
import Page from './Pages/Page';
import './App.css';
function App() {
  return (
    <Router>
    <div className="app">
      <nav>
        {<Navbar />}
      </nav>
      <main>
        <section >
          {<Page />}
        </section>
        <section>
          {<Patronite />}
        </section>
      </main>
      <footer>{<Footer />}</footer>
    </div>
  </Router>
  );
}

export default App;

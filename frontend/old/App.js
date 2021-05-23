import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import CardsList from './Pages/CardsList';
import ScienceAndTechnology from './Pages/ScienceAndTechnology';
import Layout from './Layouts/Layout'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>
        <Route path='/Video/:id'>
            <Layout>
               <CardsList />
            </Layout>
         </Route>
         <Route path='/Nauka-i-technika'>
            <Layout>
               <ScienceAndTechnology />
            </Layout>
         </Route>
      </Switch>
    </Router>
  );
}

export default App;

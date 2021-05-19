import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Navbar/Navbar';
import Baner from '../components/Baner/Baner';
import TabsCategory from '../Layouts/TabsCategory';
import Footer from '../components/Footer';
import Patronite from '../components/Patronite';
import ToDoList from '../components/ToDoList/ToDoList';
import { useHistory, useLocation } from 'react-router';

const HomePage = () => {
    return ( 
        <div>
          <Baner/>
          <TabsCategory/>
        </div>
     );
}
 
export default HomePage;
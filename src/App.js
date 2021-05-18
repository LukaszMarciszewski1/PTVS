import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Navbar/Navbar';
import Baner from './components/Baner/Baner';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';
function App() {
  return (
    <div className="App">
     <Header/>
     <Baner/>
     <Navigation/>
     <Footer/>
    </div>
  );
}

export default App;

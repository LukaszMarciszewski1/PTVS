import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Navbar/Navbar';
import Baner from './components/Baner/Baner';
import Navigation from './components/Navigation/Navigation';
import ToDoList from './components/ToDoList/ToDoList.js';
import './App.css';
function App() {
  return (
    <div className="App">
     <Header/>
     <Baner/>
     <Navigation/>
    </div>
  );
}

export default App;

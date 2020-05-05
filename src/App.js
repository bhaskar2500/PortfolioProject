
import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import createBrowserHistory from 'history/createBrowserHistory';

import { Routes } from './routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router history={createBrowserHistory}>
        <Header />
        <NavigationBar></NavigationBar>
          <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import React,{Suspense} from 'react';
import Loading from '../src/components/Loading/Loading';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NavigationBarContainer } from './components/NavigationBar/NavigationBar';
import createBrowserHistory from 'history/createBrowserHistory';
import useFetch from 'fetch-suspense'

import { Routes } from './routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router history={createBrowserHistory}>
        <Header />
        <NavigationBarContainer></NavigationBarContainer>
          <Routes />
        <Footer />
      </Router>
    </div>
  );
}

const AppContainer= function(props){
  return (
  <Suspense fallback={<Loading />}>
    <App {...props}></App>
  </Suspense>
  )
}
export default AppContainer;

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import './hamburgers.min.css';

import { Link } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </React.Fragment>
);

export default App;

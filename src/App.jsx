import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Technology from './pages/Technology';
import World from './pages/World';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
         <div className='App'>
            <Header/>
              <Routes>
                  
                  <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/technology" element={<Technology />} />
              </Routes>
              <Footer/>
         </div>
        </Router>
    );
};

export default App;

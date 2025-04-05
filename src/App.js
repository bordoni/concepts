import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Card, CardBody, CardHeader, SlotFillProvider, Flex, Popover } from '@wordpress/components';
import Home from './Home';
import './App.css';

function App() {
  const basePath = process.env.REACT_APP_BASE_PATH || '/concepts';
  
  return (
    <SlotFillProvider>
      <Router basename={basePath}>
        <div className="App">
          <div className="app-header">
            <CardHeader>
              <Flex justify="center">
                <h1>{process.env.REACT_APP_NAME || 'Bordoni Concepts'}</h1>
              </Flex>
            </CardHeader>
          </div>
          
          <div className="app-content">
            <Card>
              <CardBody>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </CardBody>
            </Card>
          </div>
        </div>
      </Router>
      <Popover.Slot />
    </SlotFillProvider>
  );
}

export default App; 
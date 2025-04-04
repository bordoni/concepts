import React from 'react';
import Header from './components/Header';
import AttendeeFields from './components/AttendeeFields';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AttendeeFields />
      </main>
    </div>
  );
}

export default App; 
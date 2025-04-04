import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import AttendeeFields from './components/AttendeeFields';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AttendeeFields />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
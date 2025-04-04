import React from 'react';
import ReactDOM from 'react-dom/client';
import AttendeeFields from './AttendeeFields';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <AttendeeFields />
    </div>
  </React.StrictMode>
); 
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components here
import About from './components/about';
import Announcements from './components/announcements';
import Events from './components/events';
import Jobs from './components/jobs';
import Readings from './components/readings'; 
import Songs from './components/songs';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </div>
  );
};

export default App;

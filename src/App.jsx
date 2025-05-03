import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeInfo from './pages/PracticeInfo';
import ScheduleResults from './pages/ScheduleResults';
import Roster from './pages/Roster';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice" element={<PracticeInfo />} />
          <Route path="/schedule" element={<ScheduleResults />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

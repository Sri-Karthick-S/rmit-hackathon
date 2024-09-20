import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './components/components/AuthContext';
import Dashboard from './components/components/Dashboard';
import Login from './components/components/Login';
import Signup from './components/components/Signup';
import Profile from './components/components/Profile';
import StudyPlanner from './components/components/StudyPlanner';
import StudyBuddy from './components/components/StudyBuddy';
import OpenForum from './components/components/OpenForum';
import CampusEats from './components/components/CampusEats';
import CampusResources from './components/components/CampusResources';
import CareerLunch from './components/components/CareerLunch';
import FitU from './components/components/FitU';
import Footer from './components/components/Footer';
import ErrorBoundary from './components/components/ErrorBoundary';
import './App.css';


function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/study-planner" element={<StudyPlanner />} />
              <Route path="/study-buddy" element={<StudyBuddy />} />
              <Route path="/open-forum" element={<OpenForum />} />
              <Route path="/campus-eats" element={<CampusEats />} />
              <Route path="/campus-resources" element={<CampusResources />} />
              <Route path="/career-lunch" element={<CareerLunch />} />
              <Route path="/fit-u" element={<FitU />} />
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import ContactPage from './Components/Contact/ContactPage';
import Nav from './nav';

function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="*" element={<h1>Not Found</h1>} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

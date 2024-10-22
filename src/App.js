import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import 'antd/dist/reset.css';
import { useRef } from 'react';


const MyComponent = () => {
  const myRef = useRef(null);

  return (
    <div ref={myRef}>
      {/* Your content here */}
    </div>
  );
};

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  );
}


export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import './index.css';



const MyComponent = () => {

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px'}}>
            <Button className="mt-4 p-2 bg-blue-800 text-white" type="primary">Click Me</Button>
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
    
    <MyComponent />

    </>
  );
}


export default App;

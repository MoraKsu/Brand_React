import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import SinglePage from './pages/SinglePage';
// import Checkout from './pages/Checkout';
// import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;


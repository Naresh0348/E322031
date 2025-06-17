import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import stockprice from './stockprice';
import hmap from './hmap';

function App() {
  return (
    <Router>
      <div>
        <h1>Stock aggregation</h1>
      </div>
      <nav className="mb-4">
          <Link to="/" >Stock Page</Link>
          <br/><br/>
          <Link to="/heatmap">Heatmap</Link>
        </nav>
      <Routes>
        <Route path='/' element={<stockprice/>}/>
        <Route path='/heatmap' element={<hmap/>}/>
      </Routes>
    </Router>
  )
}

export default App;

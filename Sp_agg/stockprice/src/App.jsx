import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import stockprice from './stockprice';
import hmap from './hmap';

function App() {
  return (
    <Router>
      <div>
        <h1>Stock aggregation</h1>
      </div>
      <Routes>
        <Route path='/' element={<stockprice/>}/>
        <Route path='/heatmap' element={<hmap/>}/>
      </Routes>
    </Router>
  )
}

export default App;

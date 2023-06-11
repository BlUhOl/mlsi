
import './App.css';
import _mainhome from './components/mainhome';
import React from 'react';
import {Routes, Route, UNSAFE_NavigationContext} from 'react-router-dom';
import _navbar from './components/navbar';
import _order from './components/order';

function App() {
  return (
    <>
    
      <_navbar/>
      <Routes>
        
        <Route path='/dashboard/orderlist' element={<_order/>} />
        <Route path='/dashboard/overview' element={<_mainhome/>} />
      </Routes>  
    </>
  );
}

export default App;

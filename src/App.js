
import './App.css';
import _mainhome from './components/mainhome';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import _navbar from './components/navbar';
import _order from './components/order';

function App() {
  return (
    <>
    
      
      <Routes>
        
        <Route path='/order' element={<_order/>} />
        <Route path='/' element={<_mainhome/>} />
      </Routes>  
    </>
  );
}

export default App;

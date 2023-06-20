
import './App.css';
import _mainhome from './components/mainhome';
import React from 'react';
import {Routes, Route, UNSAFE_NavigationContext} from 'react-router-dom';
import _ordertable from './components/ordertable';
import _hero from './components/hero'
import _inventory from './components/inventory';
import _inputformorder from './components/inputformorder'
import _pageorder from './components/pageorder';
import _navbar from './components/navbar';


function App() {
  return (
    <>
    
      
      <Routes>
        <Route path='/' element={<_hero/>} />
        <Route path='/order' element={<_pageorder/>} />
        <Route path='/inputformorder' element={<_inputformorder/>} />
        <Route path='/dashboard/orderlist' element={<_ordertable/>} />
        <Route path='/dashboard/overview' element={<_mainhome/>} />
        <Route path='/dashboard/inventory' element={<_inventory/>} />
        

      </Routes>  
    </>
  );
}

export default App;

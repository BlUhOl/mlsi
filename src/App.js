
import './App.css';
import _mainhome from './components/mainhome';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    
      
      <Routes>
        <Route path='/' element={<_mainhome/>} />
      </Routes>  
    </>
  );
}

export default App;

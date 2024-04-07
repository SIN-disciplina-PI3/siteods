import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import OdsDescription from './components/OdsDescription';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/descricao' elemen={<OdsDescription />}/>
          </Routes>
        </div>      
      </BrowserRouter>  
    </div>
  );
};

export default App;



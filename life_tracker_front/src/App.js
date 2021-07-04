import React from 'react';
// import  {useState, useEffect}  from 'react-dom\\\';
import  {Routes, Route} from 'react-router-dom';
import Landing from './Landing/Landing'
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Excersise from './Excersise/Excersise';
import Activity from './Activity/Activity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/activity' element={<Activity/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

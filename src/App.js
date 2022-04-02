import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Routes/Home.js';
import Profile from './Routes/Profile.js'

import user from './Images/profile.png';

import './Styles/App.css';

const App = () => {
  return (
    <div>
      <Router>
        <nav class="header">
          <Link to='profile'>{<img class="prof" src={user}></img>}</Link>
          <Link class="title" to=''>Twidder</Link>
          <img class='menu'></img>
        </nav>
        <p class="sub-title">bird haven - squack town - feather hub</p>
        <Routes>
          <Route path='profile' element={<Profile/>}/>
          <Route path='' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;

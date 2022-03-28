import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Routes/Home.js';
import Profile from './Routes/Profile.js';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const rootElement =  document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='home' element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

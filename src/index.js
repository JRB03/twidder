import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
      <Route path='/' element={<App/>}/>
      <Route path='Profile' element={<Profile/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

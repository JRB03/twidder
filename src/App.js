import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

import Tweet from './Components/Tweet.js';
import user from './Images/profile.png';

import Tweets from './Tweets/Tweets.js';

import './Styles/App.css';

const App = () => {
  return (
    <div>
      <div class="header">
        <Link to='profile'>{<img class="prof" src={user}></img>}</Link>
        <Link class="title" to='home'>Twidder</Link>
        <img class="menu"></img>
      </div>
      <p class="sub-title">bird haven - squack town - feather hub</p>
      <Outlet/>
    </div>
  )
}

export default App;

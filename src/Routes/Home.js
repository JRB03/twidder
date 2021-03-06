import React, {useState, useEffect} from 'react';
import { db } from '../firebase.js';
import {collection, addDoc, getDocs} from 'firebase/firestore';

import {v4 as uuidv4} from 'uuid';
import Exhibit from '../Components/Exhibit.js';

import '../Styles/Home.css';

import Tweets from '../Tweets/Tweets.js';

const Home = () => {
  const [tweets, setTweets] = useState([]);

  const [username, setUsername] = useState("");
  const [usertag, setUsertag] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const updateTweets = () => {
    let temp = [];
    getDocs(collection(db,'tweeds')).then((snapshot) => {
      snapshot.forEach((doc) => temp.push(doc.data()));
      setTweets(temp);
    });
  }

  useEffect(updateTweets,[]);

    return (
    <div>
      <h2>Hoot your own:</h2>
      <div class="make-container">
        <div class="set-user">
          <input class="set-name" placeholder="Username" value={username} onChange={ (e) => setUsername(e.target.value) }/>
          <input class="set-tag" placeholder="Tag" value={usertag} onChange={ (e) => setUsertag(e.target.value) }/>
          <input class="set-date" placeholder="Date" value={date} onChange={ (e) => setDate(e.target.value) }/>
        </div>
      
        <input class="set-content" placeholder="Content..." maxLength={100} value={content} onChange={ (e) => setContent(e.target.value) }/>

      </div>

      <button class="tweet" style={{color: ""}} onClick={() => {
          setContent("");
          addDoc(collection(db,'tweeds'),{
            username:username,
            usertag:usertag,
            content:content,
            date:date,
            il:0,
            id:uuidv4()
          }).then(() => updateTweets);
          }}>Tweet!</button>

      <h2>Tweed Feed:</h2>
      <Exhibit>{tweets}</Exhibit>
      <h2>Twending:</h2>
      <Exhibit>{Tweets}</Exhibit>
    </div>
  )
}

export default Home;

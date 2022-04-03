import React, {useState, useEffect} from 'react';
import '../Styles/Tweet.css';
import empty from '../Images/xheart.png';
import loved from '../Images/oheart.png';

import profile from "../Images/profile.png";

const Tweet = props => {
   const[Likes,setLikes] = useState(props.il);
   const[Heart,setHeart] = useState(false);
   const Like = () => { 
      setHeart(!Heart)
      Heart ? setLikes(Likes-1) : setLikes(Likes+1);
   };

   //after 5 seconds 50% of likeing rendered tweet
   // useEffect( () => {
   //    let ran = Math.random();
   //    if(ran > 0.5) {setTimeout(Like,5000)}
   // },[]);

   return (
      <div class="tweet-container">
         <div class="user">
            <img class="user-pic" src={profile}/>
            <div class="user-info">
               <p class="user-name">{props.user}</p>
               <p class="user-tag">@{props.tag}</p>
            </div>
         </div>

         <p class="content">{props.content}</p>

         <div class="tweet-bottom">
            <div onClick={Like} class="tweet-interact">
               <img class="heart" src = {Heart ? loved : empty}/>
               <p class="likes">{Likes}</p>
            </div>
            <p class="date">{props.date}</p>
         </div>
         
      </div>
   );
}

export default Tweet;
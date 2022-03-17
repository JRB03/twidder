import React, {useState} from 'react';
import '../Styles/Tweet.css';
import empty from '../Images/xheart.png';
import loved from '../Images/oheart.png';

const Tweet = props => {
   const[Likes,setLikes] = useState(0);
   const[Heart,setHeart] = useState(false);
   const Like = () => { 
      setHeart(!Heart);
      Heart ? setLikes(Likes-1) : setLikes(Likes+1);
   };

   return (
      <div class="tweet-container">
         <p>hey</p>
         <p>{props.content}</p>
         <p>{props.user}</p>
         <p>{props.date}</p>
         <div onClick={Like} class="likes">
            <img class="heart" src = {Heart ? loved : empty}></img>
            <p>{Likes}</p>
         </div>
         
         
      </div>
   );
}

export default Tweet;
import React from "react";
import '../Styles/Tweet.css';

const Tweet = props => {
   return (
      <div>
         <p class="content">{props.content}</p>
         <p class="user">{props.user}</p>
         <p class="date">{props.date}</p>
      </div>
   );
}

export default Tweet;
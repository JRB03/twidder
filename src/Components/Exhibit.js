import React from 'react';
import Tweet from './Tweet';

const Exhibit = (props) => {

   return (
      <div>
         <p class="h1">{props.header}</p>
         <div class="list">{props.clist}</div>
      </div>
   )
}

export default Exhibit;
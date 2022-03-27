import React,{useState} from 'react';
import Tweet from './Tweet.js';
import '../Styles/Exhibit.css';

const Exhibit = (props) => {
   const [search,setSearch] = useState('');
   let tweets = props.children;
   
   return (
      <div>
         <input class='search-bar' type='text' placeholder='Search...'value={search} onChange={ (e) => setSearch(e.target.value) }/>
         <div class='tweets'>
            {tweets.filter((tweet)=>{return tweet.content.includes(search) || tweet.username.includes(search)})
            .map((tweet) => (
               <Tweet 
               user={tweet.username} 
               tag={tweet.usertag} 
               content={tweet.content} 
               date={tweet.date} 
               il={tweet.il}
               key={tweet.id}/>))
            }
         </div>
      </div>
   )
}

export default Exhibit;
import React from 'react';
import Exhibit from './Components/Exhibit.js';
import Tweet from './Components/Tweet.js';
import Header from './Components/Header';
import '../Styles/App.css';

const App = () => {
  //hot tweeds
  let ex1 = [<Tweet content="ya"/>,"yeet","ya"];

    return (
    <div>
      <Header/>
      <Exhibit 
        header={"Hot Tweeds"}
        clist={ex1}
      />
    </div>
  );
}

export default App;

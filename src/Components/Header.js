import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Header.css';

const Header = () => {
   return (
   <div>
      <div class="header">
         <p class="title">Twidder</p>
      </div>
      <p class="sub-title">bird haven - squack town - feather hub</p>
      <Link to='../Routes/Profile.js'>Profile</Link>
   </div>
   )
}

export default Header;
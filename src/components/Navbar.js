import React from 'react';
import s from './Nav.module.css'

const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div>
        <a href="#top" >Profile</a>
        </div>
        <div>
        <a href="#top">Messages</a>
        </div>
        <div>
        <a href="#top">News</a>
        </div>
        <div>
        <a href="#top">Music</a>
        </div>
        <div>
        <a href="#top">Settings</a>
        </div>
      </nav>
            );
  }

export default Navbar;

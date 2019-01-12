import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';

const App = () => {
    return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/*<Profile />*/}
        <div class='app-wrapper-content'>
        <Dialogs />
        </div>
      </div>
          );
  }

export default App;

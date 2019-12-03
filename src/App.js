import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import {Route } from 'react-router-dom';

const App = (props) => {
  debugger;
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className={'app-wrapper-content'}>
          <Route path='/dialogs' render = {() =>
          <Dialogs
          store={props.store}
          // messagesPage={props.state.messagesPage}
          // dialogs={props.state.messagesPage.dialogs}
          // messages={props.state.messagesPage.messages}
          // dispatch={props.dispatch}
          /> }/>
          <Route path='/profile' render = {() =>
          <Profile
          profilePage={props.state.profilePage}
          posts={props.state.profilePage.posts}
          dispatch={props.dispatch}
          /> }/>
        </div>

      </div>);
}

export default App;
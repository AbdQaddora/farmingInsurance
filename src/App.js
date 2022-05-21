import { useState } from 'react';
import './App.css';
import Aside from './Components/Aside/Aside';
import Map from './Components/Map/Map';
import GlobalContextProvider from './Context/GlobalContext';
import mobileError from './images/no_mobile.svg';
function App() {
  return (
    <GlobalContextProvider>
      <div className='mobile'>
        <img src={mobileError} alt="" />
        you can not use our system from mobile
      </div>
      <div className="App">
        <Aside />
        <Map />
      </div>
    </GlobalContextProvider>
  );
}

export default App;

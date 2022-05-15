import { useState } from 'react';
import './App.css';
import Aside from './Components/Aside/Aside';
import Map from './Components/Map/Map';
import GlobalContextProvider from './Context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Aside />
        <Map />
      </div>
    </GlobalContextProvider>
  );
}

export default App;

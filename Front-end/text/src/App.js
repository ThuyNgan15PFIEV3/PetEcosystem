import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/Topmenu/TopMenu';
import Header from './Component/Header/Header';
import Shop from './Component/Section/Shop';
import Feed from './Component/Section/Feed';
import About from './Component/Section/About';


function App() {
  return (
    <div className="Text">
      <TopMenu/>
      <Header/>
      <Shop/>
      <Feed/>
      <About/>
    </div>
  );
}

export default App;

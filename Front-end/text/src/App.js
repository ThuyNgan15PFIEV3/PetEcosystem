import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TopMenu from './Component/Topmenu/TopMenu';
import Header from './Component/Header/Header';
import Shop from './Component/Section/Shop';
import Feed from './Component/Section/Feed';
import About from './Component/Section/About';


function App() {
  return (
    <BrowserRouter>
      <div className="Text">
        <TopMenu />
        <Header />
        <div>
          <Route exact path="/" component={Shop} />
          <Route exac path="/Feed" component={Feed} />
          <Route exac path="/About" component={About} />
        </div>
        {/* <Shop />
        <Feed />
        <About /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;

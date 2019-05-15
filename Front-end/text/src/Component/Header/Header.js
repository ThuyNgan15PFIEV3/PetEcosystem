import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div>  
          <header className="masthead">
            <div className="container">
             <div className="intro-text">
                <div className="intro-lead-in">Welcome To Our Shop!
                </div>
                <div className="intro-heading text-uppercase">It's Nice To Meet You
                </div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More
                </a>
             </div>
            </div>
          </header>
        </div>
        );
    }
}

export default Header;
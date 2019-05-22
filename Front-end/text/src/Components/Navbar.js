import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          {/* nav */}
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index.html">pet<span>z</span></a>
              </div>
              {/* Collect the nav links and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="/"><i className="fa fa-home" aria-hidden="true" /> <span className="sr-only">(current)</span></a></li>
                  <li><a href="/about">About </a></li>
                  <li><a href="/shop">Shop </a></li>
                  <li><a href="/services">Services </a></li>
                  <li><a href="/blog">Blog </a></li>
                  <li><a href="#contact">Contact </a></li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container*/}
          </nav>
          {/* nav End*/}
        </header>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Product.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(event) {
    event.preventDefault();
    try {
      localStorage.clear();
      window.location.reload();
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const isLoggedIn = localStorage.getItem('token');
    console.log(isLoggedIn);
    let logout;
    if (isLoggedIn) {    
      logout = <li><a href="/login"  onClick={(event) => (this.handleLogout(event))}>Log out</a></li>
    }
    else {
      logout = <li><a href="/login" >Log in</a></li>
    }
    let adminpage;
    const isAdmin = localStorage.getItem('isAdmin');

    if (isAdmin) {
      adminpage = <li><a href="/admin">Admin</a></li>
    }


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
                <a className="navbar-brand" href="/">pet<span>z</span></a>
              </div>
              {/* Collect the nav links and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/"><i className="fa fa-home" aria-hidden="true" /> <span className="sr-only">(current)</span></a></li>
                  {adminpage}
                  <li><a href="/shop">Shop </a></li>
                  <li><a href="/stores">stores </a></li>
                  <li><a href="/blog">Blog </a></li>
                  <li><a href="/mystore">My Store </a></li>
                  {logout}
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
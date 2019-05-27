import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Login.css';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Signup extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>Signup</h1>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        <div className="container">
          <div className="inner-content">
            <div className="login-form section text-center">
              <div className="container">
                <h4 className="rad-txt">
                  <span className="abtxt1">
                    <Link to="/login">Log In</Link>
                  </span>
                  <span className="abtext">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </h4>
                <div onSubmit={this.handleSignup} id="signupbox" style={{ marginTop: '50px' }} className="mainbox loginbox">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <div className="panel-title">Sign Up</div>
                      <div style={{ float: 'right', fontSize: '85%', position: 'relative', top: '-10px' }}>
                      </div>
                    </div>
                    <div className="panel-body">
                      <form id="signupform" className="form-horizontal" action="#" method="post">
                        <div className="form-group">
                          <label className="col-md-3 col-sm-3 col-xs-3 control-label">Email</label>
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 col-sm-3 col-xs-3 control-label">First Name</label>
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <input type="text" className="form-control" name="firstname" placeholder="First Name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 col-sm-3 col-xs-3 control-label">Last Name</label>
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <input type="text" className="form-control" name="lastname" placeholder="Last Name" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 col-sm-3 col-xs-3 control-label">Password</label>
                          <div className="col-md-9 col-sm-9 col-xs-9">
                            <input type="password" className="form-control" name="password" placeholder="Password" required />
                          </div>
                        </div>
                        <div className="form-group">
                          {/* Button */}
                          <div className="signup-btn">
                            <div className="col-sm-12 controls">
                              <button className="btn btn-success">Signup </button>
                            </div>
                          </div>
                        </div>
                        <div style={{ borderTop: '1px solid #999', paddingTop: '20px' }} className="form-group">
                          <div className="f-btn">
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    )
  };
}
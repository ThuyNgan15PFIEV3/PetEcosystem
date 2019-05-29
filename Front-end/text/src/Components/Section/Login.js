import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Login.css';
import axiosInstance from '../../helper/AxiosInstance';
import jwt_decode from 'jwt-decode';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }


  handleLogin(event) {
    event.preventDefault();
    console.log('test');
    const data = new FormData(event.target);
    axiosInstance.post('/user/login', {
      email: data.get('email'),
      password: data.get('password')
    }).then((response) => {
      console.log(response);
      if (response.data.success) {
        localStorage.setItem('userId', response.data.data.id);

        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('username', response.data.data.username);
        localStorage.setItem('role', response.data.data.role);
        alert("Login Succesful");
        this.props.history.push('/');
        window.location.reload();
      } else {
        alert(response.data.error);
      }
    }).catch((error) => {
      console.log("tets");
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>Login</h1>
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
                <div id="loginbox" style={{ marginTop: '30px' }} className="mainbox  loginbox">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      <div className="panel-title">Log In</div>
                      <div className="fpassword">
                      </div>
                    </div>
                    <div style={{ paddingTop: '30px' }} className="panel-body">
                      <div style={{ display: 'none' }} id="login-alert" className="alert alert-danger col-sm-12" />
                      <form onSubmit={this.handleLogin} className="form-horizontal">
                        <div style={{ marginBottom: '25px' }} className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user" />
                          </span>
                          <input type="email" className="form-control" name="email" placeholder="email" required />
                        </div>
                        <div style={{ marginBottom: '25px' }} className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-lock" />
                          </span>
                          <input type="password" className="form-control" name="password" placeholder="password" required />
                        </div>
                        <div className="input-group">
                          <div className="checkbox">
                            <label>
                              <input id="login-remember" type="checkbox" name="remember" defaultValue={1} /> Remember me
                      </label>
                          </div>
                        </div>
                        <div style={{ marginTop: '10px' }} className="form-group">
                          {/* Button */}
                          <div className="col-sm-12 controls">
                            <button className="btn btn-success">Login </button>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-md-12 control">
                            <div style={{ borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%' }}>
                              For get your password ?
                        <Link to="/signup">
                                Click Here
                        </Link>
                            </div>
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
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="inner-content">
                <div className="col-sm-6" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                  <h2 className="left">Contact us for support</h2>
                  <form>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <input className="form-control" name="name" placeholder="Name" type="text" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <input className="form-control" name="email" placeholder="Email" type="email" required />
                      </div>
                    </div>
                    <textarea className="form-control" name="comments" placeholder="Comment" rows={8} defaultValue={""} /><br />
                    <div className="row">
                      <div className="col-sm-12 form-group">
                        <button className="btn btn-default pull-left" type="submit">Get In Touch</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-5 address" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                  <h2>Our Office Address</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                  <ul className="social-icon">
                    <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-square" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <p><a className="footer-logo" href="index.html">pet<span>z</span></a></p>
                </div>
                <div className="col-sm-9">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="products.html">Product</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="shop.html">shop</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="careers.html">careers</a></li>
                    <li><a className="hidden-xs" href="#">|</a></li>
                    <li><a href="#contact">contact</a></li>
                  </ul>
                  <p>(C) 2017, All Rights Reserved <span><a href="https://www.template.net/editable/websites/html5" target="_blank">Petz Theme</a></span>, Designed by <span><a href="https://www.template.net/editable/websites/html5" target="_blank">Template.net</a></span></p>
                </div>
              </div>
            </div>
          </footer>
          {/* Footer End */}
        </section>
      </div>
    );
  }
}



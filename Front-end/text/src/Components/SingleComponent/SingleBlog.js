import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Read Our Blog</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <div className="heading">
              <h2>Man sitting with pet on the rocky beach of california!</h2>
            </div>
            <div className="social-buttons" data-aos="fade-up" data-aos-duration={500}>
              <div className="row">
                <div className="col-sm-7 col-md-6">
                  <div className="inner-text">
                    <h3>December 23, 2016 Posted by <span>Bizzy</span> In : <span>Fashion</span></h3>
                  </div>
                </div>
                <div className="col-sm-5 col-md-6">
                  <ul className="mbm_social">
                    <li><a className="social-facebook" href="#">
                      <i className="fa fa-facebook"><small>1.2m</small></i>
                      <div className="tooltip"><span>facebook</span></div>
                    </a>
                    </li>
                    <li><a className="social-twitter" href="#">
                      <i className="fa fa-twitter"><small>448.6k</small></i>
                      <div className="tooltip"><span>Twitter</span></div>
                    </a>
                    </li>
                    <li><a className="social-google-plus" href="#">
                      <i className="fa fa-google-plus"><small>111.7k</small></i>
                      <div className="tooltip"><span>google</span></div>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contant">
              <div className="row" style={{ marginRight: 0, marginLeft: 0 }} data-aos="fade-up" data-aos-duration={500}>
                <img src="/images/blog-single.jpg" alt="test" className="img-thumbnail img-responsive image" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry. Lorem Ipsum has been dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry. Lorem Ipsum has been thdummy text of the e industry's...e industry's...
              </p>
                <p>
                  lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
              </p>
                <p>
                  Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              </p>
              </div>
            </div>
            <div className="blog blog-single">
              <h4 className="subtitle"><span>Similar Posts</span></h4>
              <div className="row" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col-xs-12 col-sm-6 col-md-7">
                  <div className="thumbnail">
                    <div className="caption">
                      <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                      <p><span><a href="blog_single.html">read more...</a></span></p>
                      <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                    </div>
                    <img src="images/blog-6.jpg" className="img-responsive" alt="..." />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-5">
                  <div className="thumbnail">
                    <div className="caption">
                      <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                      <p><span><a href="blog_single.html">read more...</a></span></p>
                      <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                    </div>
                    <img src="images/blog-2.jpg" className="img-responsive" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>{/* /.container */}
        </section>
        {/* blog_single section Ended */}
      </div>
    );
  }
}
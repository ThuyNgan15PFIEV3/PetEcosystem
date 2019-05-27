import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../helper/AxiosInstance';

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      comments: [],
    };
  }

  componentDidMount() {
    axiosInstance
      .get('/products/' + this.props.match.params.productId)
      .then((response) => {
        console.log(response);
        this.setState((prevState, props) => {
          var shopname
          if(response.data.store) {
            shopname = response.data.store.name
          } else {
            shopname = ""
          }
          return {
            data: response.data.data,
            comments: response.data.data.comments,
            name: shopname
          }
        })
        console.log(this.state.name)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const createdAt = new Date(this.state.data.createdAt).toString();
    var listComments = this.state.comments.map(comment => {
      const name = comment.userId.name;
      return (
        <div className="review-content">
          <h6>{name}&nbsp;/
        <span>{comment.createdAt}</span>
          </h6>
          <p>{comment.comment}</p>
        </div>
      )
    })
    return (
      <div>
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Our Products</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* Blog-single Section Start */}
        <section className="single">
          <div className="container">
            <div className="inner-content">
              <h2 className="myh2">{this.state.data.name}</h2>
              <div className="social-buttons" data-aos="fade-up" data-aos-duration={500}>
                <div className="row">
                  <div className="col-sm-7 col-md-6">
                    <div className="inner-text">
                      <h3>{createdAt} Posted by <span>{this.state.name}</span></h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-8 slider-sec" data-aos="fade-up">
                  {/* main slider carousel */}
                  <div id="myCarousel" className="carousel slide">
                    {/* main slider carousel items */}
                    <div className="carousel-inner">
                      <div className="item carousel-item active" data-slide-number={0}>
                        <img src="/images/blog-img1%20(1).jpg" alt="image" className="img-thumbnail img-responsive img-fluid w549" />
                      </div>
                    </div>
                    {/* main slider carousel nav controls */}

                  </div>
                  {/*/main slider carousel*/}
                </div>
                <div className="col-sm-12 col-md-4 slider-content">
                  <p className="myp" data-aos="fade-up">
                    {this.state.data.description}
                  </p>
                  <div className="row myrow">
                    <div className="col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
                      <ul>
                        <li className="mylist1">
                          <span className="myspan1">Now</span>&nbsp;&nbsp;
                          <span className="myspan1">:</span>&nbsp;&nbsp;
                          <span className="myspan1">{this.state.data.price}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12">
                      <div className="cart" data-aos="fade-up" data-aos-duration={1500}>
                        <a href="#" className="btn btn-info" role="button">ADD TO CART</a>
                        <a href="#" className="btn btn-primary" role="button">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="review">
              <div className="container">
                <div className="inner-content">
                  <div className="row myrow1">
                    <div className="col-md-12">
                      <div className="myreview">
                        <h2>Reviews</h2>
                        {listComments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-12" data-aos="fade-up">
              <h2>Write a Review</h2>
              <form className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <div className="col-sm-4">
                      <input className="form-control" placeholder="Enter your name" required="true" size={30} type="text" />
                    </div>
                    <div className="col-sm-4">
                      <input className="form-control" placeholder="Enter your email" required="true" size={30} type="text" />
                    </div>
                    <div className="col-sm-4">
                      <input className="form-control" placeholder="Your website" required="true" size={30} type="text" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <textarea className="form-control" placeholder="Type your message" required="true" rows={7} defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-sm-12 form-group">
                    <button className="btn btn-default pull-left" type="submit">Submit Comment</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
        {/* Blog-single Section End */}


      </div>
    );
  }
}
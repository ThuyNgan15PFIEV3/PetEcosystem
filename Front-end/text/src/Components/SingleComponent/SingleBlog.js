import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      comments: []
    };
  }

  componentDidMount() {
    axiosInstance
      .get('/posts/' + this.props.match.params.blogId)
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data,
            name: response.data.data.belongToUser.name,
            comments: response.data.data.comments
          }
        })
        console.log(this.state.comments);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
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
              <div className="col-sm-12"><h1>Read Our Blog</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <div className="heading">
              <h2>{this.state.data.title}</h2>
            </div>
            <div className="social-buttons" data-aos="fade-up" data-aos-duration={500}>
              <div className="row">
                <div className="col-sm-7 col-md-6">
                  <div className="inner-text">
                    <h3>{this.state.data.createdAt} Posted by <span>{this.state.name}</span></h3>
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
                <img src={this.state.data.image || "/images/blog-single.jpg"} alt="test" className="img-thumbnail img-responsive image" />
                <p>{this.state.data.content} </p>
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
            </section>            <div className="col-12" data-aos="fade-up">
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

          </div>{/* /.container */}
        </section>
        {/* blog_single section Ended */}
      </div>
    );
  }
}
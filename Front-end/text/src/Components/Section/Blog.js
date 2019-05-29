import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance
      .get('/posts')
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data
          }
        })
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    let addBlog
    if (localStorage.getItem('username')) {
      addBlog = <div>
        <a href="/addBlog">
          <button className="chr-cart pchr-cart">Thêm bài viết
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button> </a>
      </div>
    }
    var listBlog = this.state.data.map(blog => (
      <div key={blog._id} className="col-xs-12 col-sm-6 col-md-6">
        <div className="thumbnail">
          <div className="caption">
            <h3><a href={'/blog/' + blog._id}>{blog.title}</a></h3>
            <p><span><a href={'/blog/' + blog._id}>read more...</a></span></p>
          </div>
          <img src={blog.image || "/images/blog-2.jpg"} className="img-responsive" alt="..." />
        </div>
      </div>
    ))
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Read Our Blog</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* Blog Section Start */}
        <section className="blog">
          <div className="container">
            {addBlog}
            <div className="inner-content">
              <div className="row" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                {listBlog}
              </div>

              <div className="products-display">
                <a href="#" className="previous">Previous</a>
                <a href="#" className="next">Next</a>
              </div>
            </div>
          </div>{/* /.container */}
        </section>
        {/* Blog Section End */}
        <Footer />
      </div>
    );
  }
}

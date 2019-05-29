import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      comments: []
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  handleSubmitComment(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosInstance
      .post('/posts/' + this.props.match.params.blogId + '/comment', {
        userId: localStorage.getItem('userId'),
        comment: data.get('comment')
      })
      .then((response) => {
        alert('Bình luận thành công');
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    axiosInstance
      .get('/posts/' + this.props.match.params.blogId)
      .then((response) => {
        this.setState((prevState, props) => {
          let postName
          if (response.data.data.belongToUser) {
            postName = response.data.data.belongToUser.name;
          } else {
            postName = 'Anonymous';
          }
          return {
            data: response.data.data,
            name: postName,
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
      let name;
      if (comment.userId) {
        name = comment.userId.username
      } else {
        name = 'Anonymous';
      }
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
              </div>
            </div>
            <div className="contant">
              <div className="row" style={{ marginRight: 0, marginLeft: 0 }} data-aos="fade-up" data-aos-duration={500}>
                <img style={{
                  width: "50%",
                  height: "50%",
                  float: "left"
                }} src={this.state.data.image || "/images/blog-single.jpg"} alt="test" className="img-thumbnail img-responsive image" />
                <p style={{
                  left: "54%",
                  float: "right",
                  position: "absolute",
                }}>{this.state.data.content} </p>
              </div>
            </div>
            <section className="review">
              <div className="container">
                <div className="inner-content">
                  <div className="row myrow1">
                    <div className="col-md-12">
                      <div className="myreview">
                        <h2>Bình Luận</h2>
                        {listComments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-12" data-aos="fade-up">
              <h2>Bình Luận Của Bạn</h2>
              <form onSubmit={this.handleSubmitComment} className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <br />
                    <div className="col-sm-4">
                      <h3>{localStorage.getItem('username')}</h3>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <textarea className="form-control" name="comment" placeholder="Nhập bình luận tại đây" required="true" rows={7} defaultValue={""} />
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
        <Footer />
      </div>
    );
  }
}
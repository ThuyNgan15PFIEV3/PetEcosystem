import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      storeId: "",
      comments: []
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder(event) {
    if (!localStorage.getItem('username')) {
      alert('Vui Lòng Đăng Nhập Để Xem Chi Tiết Sản Phẩm');
      return this.props.history.push('/login');
    }
    axiosInstance
      .post('/orders', {
        userId: localStorage.getItem('userId'),
        storeId: this.state.storeId,
        productId: this.props.match.params.productId,
        state: 'wait'
      })
      .then((response) => {
        console.log(response)
        if (response.data.success) {
          alert("Bạn đã đặt hàng thành công");
          this.props.history.push('/order');
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleSubmitComment(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axiosInstance
      .post('/products/' + this.props.match.params.productId + '/comment', {
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
      .get('/products/' + this.props.match.params.productId)
      .then((response) => {
        console.log(response);
        this.setState((prevState, props) => {
          var shopname, shopId
          if (response.data.store) {
            shopname = response.data.store.name;
            shopId = response.data.store._id;
          } else {
            shopname = ""
            shopId = ""
          }
          return {
            data: response.data.data,
            comments: response.data.data.comments,
            name: shopname,
            storeId: shopId
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

                      <h3>{createdAt} Posted by <a href={"/stores/detail/" + this.state.storeId}><span>{this.state.name}</span></a></h3>
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
                        <img src={this.state.data.image || "https://i.ytimg.com/vi/8DKD0o7sNug/maxresdefault.jpg"} alt="image" className="img-thumbnail img-responsive img-fluid w549" />
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
                      <div className="cart" style={{ bottom: 50 }} data-aos="fade-up" data-aos-duration={1500}>
                        <button onClick={this.handleOrder} className="btn btn-info" role="button">Đặt Hàng Ngay</button>
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
          </div>
        </section>
        {/* Blog-single Section End */}
        <Footer />

      </div>
    );
  }
}
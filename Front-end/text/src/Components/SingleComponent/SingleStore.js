import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../../CSS/SingleStore.css';

export default class SingleStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      comments: [],
      products: []
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this)

  }

  handleSubmitComment(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('comment'));
    console.log(this.props.match.params.storeId);
    axiosInstance
      .post('/stores/' + this.props.match.params.storeId + '/comment', {
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

  handleDelete(id, event) {
    axiosInstance
      .delete('/products/' + id)
      .then((response) => {
        if (response.data.success === true) {
          alert('Delete Succesful');
          this.componentDidMount();
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    axiosInstance
      .get('/stores/detail/' + this.props.match.params.storeId)
      .then((response) => {
        console.log(response);
        this.setState((prevState, props) => {
          var username
          if (response.data.data.belongToUser) {
            username = response.data.data.belongToUser.name
          } else {
            username = ""
          }
          return {
            data: response.data.data,
            name: username,
            comments: response.data.data.comments,
            products: response.data.data.products
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var myStore = localStorage.getItem('myStore')
    let addProduct
    let listProducts
    let checkOrder
    if (this.props.match.params.storeId === myStore) {
      checkOrder = (
        <a href="/addBlog">
          <button style={{
            position: "absolute",
            width: "25%",
            right: "45px",
            top: "400px"
          }} className="chr-cart pchr-cart">Kiểm Tra Đơn Hàng
          <i class="fa fa-list-alt" aria-hidden="true"></i>
          </button> </a>
      )
      addProduct = (
        <div style={{
          width: "262.5px",
          height: "454.318px"
        }} className="col-sm-6 col-md-3 col">
          <div className="thumbnail">
            <figure className="image one">
              <a href={'/addproduct'}><img style={{
                width: "100%",
                height: "200px"
              }} src="/images/add.jpg" className="img-responsive" alt="Responsive image" /></a>
            </figure>
            <div className="caption">
              <h3><a href="/products/addproducts">Bấm vào đây để thêm sản phẩm</a></h3>
              <p></p>
            </div>
          </div>
        </div>
      )
      listProducts = this.state.products.map(product => (
        <div className="col-sm-6 col-md-3 col">
          <div className="thumbnail">
            <figure className="image one">
              <a href={'/products/' + product._id}><img style={{
                width: "100%",
                height: "200px"
              }} src={product.image || "/images/product-2.jpg"} className="img-responsive" alt="Responsive image" /></a>
            </figure>
            <div className="caption productdisplay">
              <h3><a href={'/products/' + product._id}>{product.name}</a></h3>
              <p>{product.description}</p>
              <div className="box">
                <h3>Giá: {product.price}</h3>
              </div>
              <a href={'/editproduct/' + product._id}>
                <button className="chr-cart pchr-cart">Edit
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </button> </a>
              <div>
                <button onClick={event => this.handleDelete(product._id, event)} className="chr-cart pchr-cart">delete
              <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div >
      ))
    } else {
      listProducts = this.state.products.map(product => (
        <div className="col-sm-6 col-md-3 col">
          <div className="thumbnail">
            <figure className="image one">
              <a href={'/products/' + product._id}><img style={{
                width: "100%",
                height: "200px"
              }} src={product.image || "/images/product-2.jpg"} className="img-responsive" alt="Responsive image" /></a>
            </figure>
            <div className="caption">
              <h3><a href={'/products/' + product._id}>{product.name}</a></h3>
              <p>{product.description}</p>
              <div className="box">
                <h3>Giá: {product.price}</h3>
              </div>
            </div>
          </div>
        </div>
      ))
    }

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
        <Navbar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Our Store</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <div className="heading">
              <h2>{this.state.data.name}</h2>
              <br />
              <h3>{this.state.data.address}</h3>
            </div>
            {checkOrder}

            <div className="social-buttons" data-aos="fade-up" data-aos-duration={500}>
              <div className="row">
                <div className="col-sm-7 col-md-6">
                  <div className="inner-text">
                    <h3>{this.state.data.createdAt} Created by <span>{this.state.name}</span></h3>
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
                }}>{this.state.data.description} </p>
              </div>
            </div>
            <section id="product">
              <div className="container">
                <div className="inner-content">
                  <h2 style={{ paddingTop: '40px' }}>Latest Products</h2>
                  <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                    {addProduct}
                    {listProducts}
                  </div>
                </div>
                {/* Inner-content End */}
              </div>
              {/* Container End */}
            </section>
            {/* Product Section End */}


            <section className="review">
              <div className="container">
                <div className="inner-content">
                  <div className="row myrow1">
                    <div className="col-md-12">
                      <div className="myreview">
                        <h2>Bình luận</h2>
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
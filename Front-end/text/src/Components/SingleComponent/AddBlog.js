import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Form.css';

export default class AddBlog extends Component {
  constructor(props) {
    super(props)
    this.handleAddBlog = this.handleAddBlog.bind(this)
  }

  handleAddBlog(event) {
    event.preventDefault();
    console.log('test');
    const data = new FormData(event.target);
    var body = {
      belongToUser: localStorage.getItem('userId'),
      title: data.get('title'),
      content: data.get('content'),
      image: data.get('image')
    }
    console.log(body)
    axiosInstance.post('/posts', body)
      .then((response) => {
        alert('Bạn đã thêm bài viết thành công, hãy kiểm tra')
        this.props.history.push('/blog');
        window.location.reload();
      })
      .catch((error) => {
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
            <div className="row">
              <div className="col-sm-12"><h1>My Store</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <h2>Nhập Nội Dung Bài Viết</h2>
            <br />
            <form onSubmit={this.handleAddBlog}>
              <label htmlFor="fname">Tiêu đề</label>
              <input type="text" name="title" placeholder="Hãy nhập tiêu đề bài viết ..." required />
              <label htmlFor="lname">Nội dung</label>
              <textarea name="content" cols="154" rows="5" />
              <label for="country">Ảnh tiêu đề bài viết</label>
              <input type="text" name="image" placeholder="Hãy nhập Link ảnh..." required />
              <input type="submit" defaultValue="Submit" />
            </form>

          </div>{/* /.container */}
        </section>
        {/* blog_single section Ended */}

        <Footer />
      </div>
    );
  }
}
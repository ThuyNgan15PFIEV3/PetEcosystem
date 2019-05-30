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
                  <h2 className="left">Liên hệ chúng tôi để cùng phát triển</h2>
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
                        <button className="btn btn-default pull-left" type="submit">Xác nhận</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-5 address" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                  <h2>Thông tin của chúng tôi</h2>
                  <p>Thành lập năm 2019</p>
                  <p>Địa chỉ: 45 Nguyễn Lương Bằng, Đà Nẵng, Việt Nam</p>
                  <p>Đia chỉ email: thucunglove@gmail.com</p>
                  <p>Số điện thoại: 0999999999</p>
                  {/* <ul className="social-icon">
                    <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-square" aria-hidden="true" /></a></li>
                  </ul> */}
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
                  <p>(C) 2019, Thực hiển bởi cộng nhóm yêu thú cưng</p>
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



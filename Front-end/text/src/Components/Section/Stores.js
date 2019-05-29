import React, { Component } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Stores extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>Bạn có thể tìm các cửa hàng theo mục sau</h1>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* services section Start */}
        <section id="services">
          <div className="container">
            <div className="inner-content">
              <div className="part-1">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/normal"><h3>Cửa Hàng</h3></a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/normal">
                      <figure>
                        <img src="images/pete-3.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typetook a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum i s type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typetook a text of the printing and typetook a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/beauty">
                      <h3>Trung Tâm Thẩm Mỹ</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/beauty">
                      <figure>
                        <img src="images/pete-2.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>

                  </div>
                  <div className="col-md-9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typetook a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum i s type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typetook a text of the printing and typetook a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/training">
                      <h3>Trung Tâm Huấn Luyện</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/training">
                      <figure>
                        <img src="images/pete-1.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typetook a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum i s type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typetook a text of the printing and typetook a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/care">
                      <h3>Trung Tâm Chăm Sóc</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/care">
                      <figure>
                        <img src="images/pete-1.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typetook a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum i s type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typetook a text of the printing and typetook a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/vet">
                      <h3>Trung Tâm Thú Y</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/vet">
                      <figure>
                        <img src="images/pete-1.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>s
                  </div>
                  <div className="col-md-9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typetook a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum i s type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typetook a text of the printing and typetook a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* services section Ended */}
        <Footer />
      </div>
    );
  }
}
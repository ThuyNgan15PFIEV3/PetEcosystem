import React, { Component } from 'react';

export default class Stores extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>Our Services</h1>
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
                    <h3>Pet Grooming</h3>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img src="images/pete-3.jpg" alt="Web Design" width="100%" />
                    </figure>
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
                    <h3>Pet Sitting</h3>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img src="images/pete-2.jpg" alt="Web Design" width="100%" />
                    </figure>
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
                    <h3>Other Services</h3>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img src="images/pete-1.jpg" alt="Web Design" width="100%" />
                    </figure>
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
      </div>
    );
  }
}
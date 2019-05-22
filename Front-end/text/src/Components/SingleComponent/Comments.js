import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <section className="review">
        <div className="container">
          <div className="inner-content">
            <div className="row myrow1">
              <div className="col-md-12">
                <div className="myreview" data-aos="fade-up">
                  <h2>Reviews</h2>
                  <div className="review-content">
                    <h6>Manish Tiwari&nbsp;/
                    <span>12.06.2016</span>
                    </h6>
                    <p>Wow...Wow.....i really like the way you write the articles about your photography, they are really
                    awesome thanks a lot for sharing</p>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </section>

    );
  }
}
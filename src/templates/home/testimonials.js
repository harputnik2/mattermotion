import React from 'react'
import spacex from '../../../static/media/spacex.png'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <span className="testimonial__symbol"></span>
      <p class="testimonial__quote">
        Working with Szymon was a real pleasure. All of my animations came out better than expected.
      </p>
      <span className="testimonial__author">
        Elon Musk
      </span>
      <img className="testimonial__logo" src={spacex} />
    </div>
  )
}

export const Testimonials = ({content}) => {

  return (
    <section className="mm-section testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2 className="caption">What Others Say About Us</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-sm">
              <Testimonial />
            </div>
            <div className="col-sm">
              <Testimonial />
            </div>
            <div className="col-sm">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

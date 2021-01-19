import React from 'react'
import zaha from '../../../static/media/zaha-hadid.png'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <span className="testimonial__symbol"></span>
      <p class="testimonial__quote">
        Working with Szymon was a real pleasure. All of my animations came out better than expected.
      </p>
      <span className="testimonial__author">
        Zaha Hadid
      </span>
      <img className="testimonial__logo" src={zaha} />
    </div>
  )
}

export const Testimonials = ({content}) => {

  return (
    <section className="mm-section testimonials-section">
      <div className="container">
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

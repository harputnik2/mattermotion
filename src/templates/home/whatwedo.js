import React from 'react'
import Img from 'gatsby-image'

export const WhatWeDo = ({categories}) => {
  console.log(categories);
  return (
    <section className="mm-section whatwedo-section">
      <div className="container">
        <div className="about-content">
          <h2 className="caption">What We Do</h2>
          <div className="category-link-holder">
            <div className="category-link-elements">
              <div className="graphic-holder">
                <div className="graphic">
                  <Img fluid={categories.animations.minature.childImageSharp.fluid} />
                </div>
              </div>
              <div className="title">
                <h2>Animations</h2>
                <figure className="category-arrow">
                  <span />
                  <span />
                </figure>
              </div>
              <div className="description">
                <p>{categories.animations.teaser}</p>
              </div>
            </div>
          </div>
          <div className="category-link-holder">
            <div className="category-link-elements">
              <div className="graphic">
                <Img fluid={categories.animations.minature.childImageSharp.fluid} />
              </div>
              <div className="title">
                <h2>Animations</h2>
                <figure className="category-arrow"></figure>
              </div>
              <div className="description">
                <p>{categories.animations.teaser}</p>
              </div>
            </div>
          </div>
          <div className="category-link-holder">
            <div className="category-link-elements">
              <div className="graphic">
                <Img fluid={categories.animations.minature.childImageSharp.fluid} />
              </div>
              <div className="title">
                <h2>Animations</h2>
                <figure className="category-arrow"></figure>
              </div>
              <div className="description">
                <p>{categories.animations.teaser}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

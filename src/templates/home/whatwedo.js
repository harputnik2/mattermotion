import React from 'react'
import Img from 'gatsby-image'
import animations from '../../video/animations.mp4'
import virtual_tour from '../../video/virtual_tour.mp4'
import visualizations from '../../video/visualizations.mp4'


const CategoryLinkHolder = ({categoryName, categoryVideo, categoryTeaser}) => {
  return (
    <div className="category-link-holder">
      <div className="category-link-elements">
        <div className="graphic-holder">
          <div className="graphic">
            <video muted={true} autoPlay={true} loop>
              <source src={categoryVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="title">
          <h3>{categoryName}</h3>
          <figure className="category-arrow">
            <span />
            <span />
          </figure>
        </div>
        <div className="description">
          <p>{categoryTeaser}</p>
        </div>
      </div>
    </div>
  )
}

export const WhatWeDo = ({categories}) => {
  return (
    <section className="mm-section whatwedo-section">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="about-content">
              <h2 className="caption">What We Do</h2>
              <CategoryLinkHolder categoryName="Animations" categoryVideo={animations} categoryTeaser="bla bla bla" />
              <CategoryLinkHolder categoryName="Virtual Tours" categoryVideo={virtual_tour} categoryTeaser="bla bla bla" />
              <CategoryLinkHolder categoryName="Visualizations" categoryVideo={visualizations} categoryTeaser="bla bla bla" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

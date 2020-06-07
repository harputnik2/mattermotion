import React from 'react'

export const Hero = () => {

  return (
    <section className="hero-section">
      <div className="container">
        <div className="columns">
          <div className="column">a</div>
          <div className="column">a</div>
          <div className="column">a</div>
          <div className="column">
            <span className="arrow-down"></span>
          </div>

        </div>
        <div className="hero-bg">
          // background video
        </div>
        <div className="hero-content">
          <h1>We are Matter Motion</h1>
          <p>
            Show the full awesomeness of your architectural projects with help
            of my skills in animations, virtual tours and visualisations.
          </p>
          <div className="hero-buttons">
            <button className="button">
              see what we do
            </button>
            <button className="button">
              let's work together
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

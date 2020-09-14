import React from 'react';
import heroVideo from './hero_video.mp4'

export const Hero = () => {

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <video muted={true} autoPlay={true} loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-content">
            <h1>This is Matter Motion</h1>
            <div className="hero-buttons">
              <button className="button">
                <span>
                  see what we do
                </span>
              </button>
              <button className="button button-framed">
                <span>
                  let's work together
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

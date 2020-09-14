import React from 'react'

export const About = ({content}) => {

  return (
    <section className="mm-section about-section">
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 className="caption">About</h2>
              <p>
                Show the full&nbsp;awesomeness of your architectural&nbsp;projects<br/>
                with&nbsp;help&nbsp;of my&nbsp;animations, virtual&nbsp;tours and&nbsp;visualisations.
              </p>
              <p>I'm a 3D artist based in Kraków, Poland. Helping architects show off their projects since 2010.</p>
            </div>
            <div className="col-sm">
              <p>
                {content}
              </p>
              <p>
                My skills are perfect for you if you value your work, want to create an engaging image
                of yor architectural designs and strive to encourage clients to your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

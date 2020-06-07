import React from 'react'

export const About = ({content}) => {

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About</h2>
          <p>I'm a 3D artist based in Kraków, Poland. Helping architects show off their projects since 2010.</p>
          <p>
            {content}
          </p>
          <p>
            My skills are perfect for you if you value your work, want to create an engaging image
            of yor architectural designs and strive to encourage clients to your project.
          </p>
        </div>
      </div>
    </section>
  )
}

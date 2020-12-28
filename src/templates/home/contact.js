import React from 'react'

export const Contact = ({content}) => {

  return (
    <section className="mm-section contact-section">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="contact-details">
              <h2 className="caption">Contact</h2>
              <div className="contact-details--field">
                <p className="label">
                  email
                </p>
                <h4>
                  hi@mattermotion.com
                </h4>
              </div>
              <div className="contact-details--field">
                <p className="label">
                  phone
                </p>
                <h4>
                  +48 881411885
                </h4>
              </div>
              <div className="contact-details--field">
                <p className="label">
                  address
                </p>
                <h4>
                  Węgierska 10/1<br/>
                  30-535 Kraków
                </h4>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-holder">
              <h2 className="caption">Let's work together</h2>
              <form
                className="contact-form"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
                autoComplete="false"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="mm-input">
                  <input type="text" name="name" autoComplete="false" required/>
                  <label className="small">Enter your name</label>
                </div>
                <div className="mm-input">
                  <input type="text" name="email" autoComplete="false" required />
                  <label className="small">Enter your email address</label>
                </div>
                <div className="mm-input">
                  <textarea autoComplete="false" name="message" required></textarea>
                  <label className="small">Feel free to ask about anything. I'm happy to help!</label>
                </div>
                <button className="button">
                  <span>
                    send message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

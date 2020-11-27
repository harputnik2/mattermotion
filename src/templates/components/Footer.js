import React from 'react'
import { Link } from 'gatsby'
import { Menu } from './Menu'
import logo from '../../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="footer-logo">
                <Link to="/" title="Logo">
                  <img src={logo} className="logo" alt="Matter Motion" />
                </Link>
              </div>
            </div>
            <div className="col-sm">
              <div className="footer-nav">
                <Menu />
              </div>
            </div>
            <div className="col-sm">
              <div className="socials">
                <ul>
                  <li>
                    <Link to="http://behance.com">
                      <span class="social">BE</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="http://facebook.com">
                      <span class="social">FB</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lang-selection">
                <ul>
                  <li>
                    <span class="small">
                      English
                    </span>
                  </li>
                  <li>
                    <span class="small">
                      Polish
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

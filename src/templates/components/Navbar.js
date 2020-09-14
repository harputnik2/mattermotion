import React from 'react'
import { Link } from 'gatsby'
import logo from '../../img/logo_icon.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleMenu = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="nav-holder">
        <div className="container">
          <nav className="main-nav navbar navbar-expand-lg" role="navigation" aria-label="main-navigation">
            <Link to="/" className="navbar-brand" title="Logo">
              <img src={logo} className="logo" alt="Matter Motion" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="">Menu</span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item" to="/projects/virtualtours">
                    Virtual Tours
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item" to="/projects/animations">
                    Animations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item" to="/projects/visualizations">
                    Visualizations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar

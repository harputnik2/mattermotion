import React from 'react'
import { Link } from 'gatsby'
import { Menu } from './Menu'
import logo from '../../img/logo_icon.svg'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleMenu = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: 'mobile-menu-visible',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className={`${this.state.navBarActiveClass} nav-holder`}>
        <div className="container">
          <nav className="main-nav navbar navbar-expand-lg" role="navigation" aria-label="main-navigation">
            <Link to="/" className="navbar-brand" title="Logo">
              <img src={logo} className="logo" alt="Matter Motion" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => this.toggleMenu()}
            >
              <span className="">Menu</span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <Menu />
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header

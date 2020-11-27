import React from 'react'
import { Link } from 'gatsby'

export const Menu = () => (
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
)

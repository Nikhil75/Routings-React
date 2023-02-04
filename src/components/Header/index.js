import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <div className="logoAndBrand">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wave"
          />
          <p className="logobrand">Wave</p>
        </div>
        <ul className="portifolio-list">
          <li className="links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header

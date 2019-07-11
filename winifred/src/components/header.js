import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      padding: '2em 3em',
    }}
  >
  <Link
    to="/"
    style={{
      color: `white`,
      textDecoration: `none`,
    }}
  >
    {siteTitle}
    <div style={{ maxWidth: `200px`, }}>
      <Image />
    </div>
  </Link>

    <div class="colContainer">
      <div class="wilderNav">
        <Link to="/story/">Story</Link>
        <Link to="/services/">Services</Link>
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/hotp">Hot Off The Press</Link>
        <Link to="/contact/">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

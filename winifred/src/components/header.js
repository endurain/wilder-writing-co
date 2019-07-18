import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffe4c1`,
      marginBottom: `1.45rem`,
      padding: '1em',
    }}
  >
    <div class="colContainer">
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div style={{ width: `200px`, }}>
            <Image />
          </div>
        </Link>
      </div>
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

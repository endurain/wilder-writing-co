
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      position: 'relative',
      backgroundColor: 'rgb(218, 218, 218)',
    }}
  >
    <div class="footerContainer">
      <div class="column-3">
        <div>
          <h2>Column 1</h2>
        </div>
        <div>
          <h2>Column 2</h2>
        </div>
        <div>
          <h2>Column 3</h2>
        </div>
      </div>
      <div>
        © {new Date().getFullYear()}, Wilder Writing Co.
      </div>
    </div>
  </footer>
)



export default Footer

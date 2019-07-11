import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <div class="formContainer">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >
          <label>Your Name</label>
          <span class="inline">

            <input name="name" placeholder="First*" type="text" required/>
            <input name="name" placeholder="Last" type="text" />
          </span>
          <input name="email" placeholder="Email*" type="text" required/>

          <p>Which services are you interested in*</p>
          <div>
            <span>
              <input type="checkbox" name="service1" value="blog posts"/>
                <p>Blog Posts</p>
            </span>
            <span>
              <input type="checkbox" name="service2" value="landing page"/>
                <p>Landing Page</p>
            </span>
            <span>
              <input type="checkbox" name="service3" value="copy overhaul"/>
                <p>Copy Overhaul</p>
            </span>
            <span>
              <input type="checkbox" name="service4" value="product descriptions"/>
                <p>Product Descriptions</p>
            </span>
            <span>
              <input type="checkbox" name="service5" value="this & that"/>
                <p>This & That (misc)</p>
            </span>
          </div>
          <label for="start date">When is your ideal start date?</label>
          <input type="date" name="start date"/>
          <button class="contactButton">Send</button>
        </form>
      </div>
  </Layout>
)

export default ContactPage

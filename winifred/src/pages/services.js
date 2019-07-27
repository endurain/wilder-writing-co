import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
      <div class="cards">
        <div class="card">
          <Image />
          <h3>Landing Pages</h3>
          <p>Wilder Writing Co. offers both short and long form sales copy to launch your business’s next exciting element - whether that be a service or product.</p>
        </div>
        <div class="card">
          <Image />
          <h3>Blog Posts</h3>
          <p>You pick the topic, I craft the content. Blog posts are generally written around 500-600 words, and are optimized with keywords and headers. You also receive a small writeup explaining those keywords and headers.</p>
        </div>
        <div class="card">
          <Image />
          <h3>Copy Overhaul</h3>
          <p>Have a website but need new copy? The Copy Overhaul package handles everything on your site, from revamping to rewriting in order to connect your audience to your business in a meaningful and impactful way.</p>
        </div>
        <div class="card">
          <Image />
          <h3>Product Descriptions</h3>
          <p>No matter how short, how long, or how many, your product descriptions will be uniform in brand voice and identity, but showcase each unique product with individuality and expertise.</p>
        </div>

      </div>

  </Layout>
)

export default ServicesPage

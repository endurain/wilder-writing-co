import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = () => (
  <Layout>
    <SEO title="Story" />
    <h1>About Wilder Writing Co.</h1>
    <p>Wilder Writing Co. was established in 2019 after a long time coming. I’ve always been a writer, and you can find my earliest works on my father’s laptop from 1997 that blatantly plagiarize The Saddle Club, The Boxcar Children and The Baby-Sitters Club. I’ve done a lot of different things in my life, but nothing fuels me quite like writing and storytelling. </p>
    <p>I chose to launch a copywriting business because I understand the drive that entrepreneurs and small business owners have. I believe that at the base of every business is a human that has a fiery passion for their product and/or service that makes the world better. When a person starts a business, the fire inside is often dimmed by the logistics that come along with starting a business. </p>
    <p>At Wilder Writing Co., content is created with the foundation of connection. People buy because of what they’re feeling, and the story that is being told from entrepreneur to audience through product and/or service. I believe that your design and brand identity sparks feeling in your audience, and the right copy builds trust and, ultimately, converts. Whether it’s product descriptions, blog posts, ‘about’ sections, social media captions, landing pages, or emails, attention, connection and individual craft is what keeps businesses going.</p>
    <p>I worked in the fine dining industry for well over a decade, doing everything from managing staff to building wine programs, and I am proud to bring the high level of hospitality to Wilder Writing Co. When we work together, you can expect to be taken care of. I have the highest expectations for myself when creating content for clients, and I ensure they’re met. When you contact Wilder Writing Co., you won’t get a VA or a bot - you’ll get me, carefully reading your project ideas and questions.</p>
    <div class="buttonContainer">
      <Link class="linkContact" to="/contact">
        <div class="contactButton">Let's Work Together</div>
      </Link>
    </div>
    <p>To learn more about me (and probably my dog, Winnie) head on over to the blog, where I’m writing about topics that make me laugh and cry and wonder.</p>

  </Layout>
)

export default StoryPage

import styles from './about.module.css'

export const metadata = {
  title: 'About Us | Modern E-commerce Store',
  description: 'Learn more about our story, mission, and values.',
}

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p> Mobile technology is disrupting industry value chains across
          verticals. We have been perfecting our value proposition for the past
          8 years to power the technology supporting your business ideas by
          building robust, scalable apps. Think you have a good idea? Get in
          touch with us and we will bring it to life.</p>
      </section>

      <section className={styles.content}>
        <div className={styles.storySection}>
          <h2>Our Story</h2>
          <p> Appscrip leverages years of experience in mobility solutions and
            tech innovation to support startups. We specialize in on-demand,
            social, discovery, messaging, and shopping platforms, offering
            prebuilt IP to save time and costs while ensuring reliable
            technology. Since 2014, we've successfully cloned leading apps like
            Tinder, Uber, Zoom, and more, empowering startups to bring their
            ideas to life. With deep industry knowledge and an agile approach,
            we help businesses adapt to the ever-changing digital landscape.</p>
        </div>

        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Quality</h3>
            <p>We carefully curate each product to ensure it meets our high standards of excellence.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Sustainability</h3>
            <p>Our commitment to the environment drives every decision we make.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We constantly evolve and adapt to bring you the latest trends and technologies.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Community</h3>
            <p>Building strong relationships with our customers and partners is at our core.</p>
          </div>
        </div>

       
      </section>
    </div>
  )
}


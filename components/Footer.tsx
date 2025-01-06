'use client'

import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.subscribeSection}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className={styles.contactSection}>
          <h3>CONTACT US</h3>
          <p>+91981800000</p>
          <p>customercare@appscrip.com</p>
          
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.brandSection}>
          <h3>mettā muse</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/artisans">Artisans</a></li>
            <li><a href="/boutiques">Boutiques</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/eu-compliance">EU Compliance Docs</a></li>
          </ul>
        </div>

        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/orders">Orders & Shipping</a></li>
            <li><a href="/join">Join/Login as a Seller</a></li>
            <li><a href="/payment">Payment & Pricing</a></li>
            <li><a href="/returns">Return & Refunds</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        
      </div>

      

      <div className={styles.copyright}>
        <p>Copyright © 2025 appscrip. All rights reserved.</p>
      </div>
    </footer>
  )
}


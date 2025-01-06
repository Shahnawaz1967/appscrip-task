'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          scripShop
        </Link>
        <div className={styles.desktopNav}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
      </div>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  )
}


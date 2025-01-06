'use client'

import { useState, useEffect } from 'react'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <div className="hamburger-container">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </nav>
    </div>
  )
}


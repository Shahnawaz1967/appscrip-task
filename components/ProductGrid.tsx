'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import styles from './ProductGrid.module.css'

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

export function ProductGrid({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [showCategories, setShowCategories] = useState(false)
  const [showSort, setShowSort] = useState(false)

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category))
    return ['all', ...Array.from(cats)]
  }, [products])

  const sortedAndFilteredProducts = useMemo(() => {
    let filtered = filter === 'all' 
      ? products 
      : products.filter(product => product.category === filter)

    switch (sortBy) {
      case 'recommended':
        return filtered.sort((a, b) => b.rating.rate - a.rating.rate)
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      default:
        return filtered
    }
  }, [products, filter, sortBy])

  const toggleCategories = () => {
    setShowCategories(!showCategories)
    setShowSort(false)
  }

  const toggleSort = () => {
    setShowSort(!showSort)
    setShowCategories(false)
  }

  const handleCategoryClick = (category: string) => {
    setFilter(category)
    setShowCategories(false)
  }

  const handleSortClick = (sortOption: string) => {
    setSortBy(sortOption)
    setShowSort(false)
  }

  return (
    <div className={styles.productsContainer}>
      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <button onClick={toggleCategories} className={styles.filterBtn}>
            Categories {showCategories ? '▲' : '▼'}
          </button>
          {showCategories && (
            <div className={styles.dropdown}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`${styles.dropdownItem} ${filter === category ? styles.active : ''}`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.filterGroup}>
          <button onClick={toggleSort} className={styles.filterBtn}>
            Sort By {showSort ? '▲' : '▼'}
          </button>
          {showSort && (
            <div className={styles.dropdown}>
              <button
                onClick={() => handleSortClick('recommended')}
                className={`${styles.dropdownItem} ${sortBy === 'recommended' ? styles.active : ''}`}
              >
                RECOMMENDED
              </button>
              <button
                onClick={() => handleSortClick('price-low')}
                className={`${styles.dropdownItem} ${sortBy === 'price-low' ? styles.active : ''}`}
              >
                PRICE: LOW TO HIGH
              </button>
              <button
                onClick={() => handleSortClick('price-high')}
                className={`${styles.dropdownItem} ${sortBy === 'price-high' ? styles.active : ''}`}
              >
                PRICE: HIGH TO LOW
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.productGrid}>
        {sortedAndFilteredProducts.map((product) => (
          <article key={product.id} className={styles.productCard}>
            <Image 
              src={product.image} 
              alt={product.title}
              width={200}
              height={200}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <div className={styles.productRating}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


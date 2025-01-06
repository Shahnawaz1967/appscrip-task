'use client'

import { useState, useMemo } from 'react'

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

  return (
    <div className="products-container">
      <div className="filter-section">
        <div className="filter-group">
          <h3>Categories</h3>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="filter-group">
          <h3>Sort By</h3>
          <button
            onClick={() => setSortBy('recommended')}
            className={`filter-btn ${sortBy === 'recommended' ? 'active' : ''}`}
          >
            RECOMMENDED
          </button>
          <button
            onClick={() => setSortBy('price-low')}
            className={`filter-btn ${sortBy === 'price-low' ? 'active' : ''}`}
          >
            PRICE: LOW TO HIGH
          </button>
          <button
            onClick={() => setSortBy('price-high')}
            className={`filter-btn ${sortBy === 'price-high' ? 'active' : ''}`}
          >
            PRICE: HIGH TO LOW
          </button>
        </div>
      </div>

      <div className="product-grid">
        {sortedAndFilteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.title}
              className="product-image"
              loading="lazy"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-rating">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


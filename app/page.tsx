import Link from 'next/link'
import Image from 'next/image'
import { ProductGrid } from '@/components/ProductGrid'
import styles from './page.module.css'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Explore Our Collection</h1>
        <p>Take a look at our range of products. Simple, stylish, and made to fit your needs.</p>
        <Link href="/products" className={styles.cta}>
          View All Products
        </Link>
      </section>

      <ProductGrid products={products.slice(0, 8)} />
      
      <div className={styles.viewMore}>
        <Link href="/products" className={styles.viewMoreLink}>
          View All Products
        </Link>
      </div>
    </div>
  )
}


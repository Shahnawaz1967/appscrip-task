import { ProductGrid } from '@/components/ProductGrid'
import styles from './products.module.css'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}

export const metadata = {
  title: 'Our Products | Modern E-commerce Store',
  description: 'Browse our collection of high-quality products.',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className={styles.productsContainer}>
      <section className={styles.hero}>
        <h1>Our Products</h1>
        <p>Browse our carefully curated collection of products</p>
      </section>

      <ProductGrid products={products} />
    </div>
  )
}


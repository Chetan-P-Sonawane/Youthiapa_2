import { motion } from "motion/react"
import ProductList from "../Components/Product/ProductList"

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-[200vh] py-24 bg-white">
          <ProductList />
      </div>
    </motion.div>
  )
}

export default Products
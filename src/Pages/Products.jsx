import ProductList from "../Components/Product/ProductList"
import PageTransition from "../Components/PageTransition/PageTransition"

const Products = () => {
  return (
    <PageTransition>
      <div className="min-h-[200vh] py-24 bg-white">
          <ProductList />
      </div>
    </PageTransition>
  )
}

export default Products
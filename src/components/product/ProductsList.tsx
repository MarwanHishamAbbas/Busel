import { FC } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

interface ProductsListProps {}

const ProductsList: FC<ProductsListProps> = ({}) => {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Link
        href="/products"
        className={buttonVariants({
          size: "lg",
          variant: "outline",
        })}
      >
        Browse All Products
      </Link>
    </div>
  )
}

export default ProductsList

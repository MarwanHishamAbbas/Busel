import { FC } from "react"
import ProductsList from "../product/ProductsList"

interface MostPopularProps {}

const MostPopular: FC<MostPopularProps> = ({}) => {
  return (
    <section className="container space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-medium ">
          Most Popular Downloads
        </h1>
        <p className="md:text-base opacity-50">
          Browse through some of my Most Popular Products!
        </p>
      </div>
      <ProductsList query={{ category: "UI", limit: 3, sort: "asc" }} />
    </section>
  )
}

export default MostPopular

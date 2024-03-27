import { getPayloadClient } from "@/get-payload"
import { FC } from "react"

interface ProductDetailsPage {
  params: {
    productId: string
  }
}

const Page: FC<ProductDetailsPage> = async ({ params }) => {
  const payload = await getPayloadClient()
  const { docs: products } = await payload.find({
    collection: "products",
    where: {
      id: { equals: params.productId },
    },
  })
  const [product] = products
  return (
    <main>
      <section className="container">
        <div>{product.name}</div>
      </section>
    </main>
  )
}

export default Page

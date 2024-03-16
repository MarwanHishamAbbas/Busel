import { FC, useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import { Product } from "@/payload-types"
import { Skeleton } from "../ui/skeleton"
import ProductPlaceholder from "./ProductPlaceholder"
interface ProductCardProps {
  product: Product | null
  index: number
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductPlaceholder />
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="relative">
          <Image
            src="/product.png"
            priority
            width={500}
            height={500}
            alt="Product"
          />
          <span className="absolute top-4 right-4 bg-background px-4 py-2 rounded-3xl font-medium">
            ${product?.price}
          </span>
        </div>
        <CardTitle className="font-medium">{product?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="opacity-40">{product?.description}</p>
      </CardContent>
      <CardFooter className="gap-4 flex-col xl:flex-row">
        <Button variant="outline" size="lg" className="w-full">
          View Product
        </Button>
        <Button variant="outline" size="lg" className="w-full  ">
          View Demo
          <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard

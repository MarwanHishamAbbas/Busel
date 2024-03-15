import { FC } from "react"
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
interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
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
            $46
          </span>
        </div>
        <CardTitle className="font-medium">Framer Template</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="opacity-40">
          Modern a Minimal and Clean Personal Portfolio Template for Framer.
        </p>
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

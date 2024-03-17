import { FC } from "react"
import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

interface HeroCTAProps {}

const HeroCTA: FC<HeroCTAProps> = ({}) => {
  return (
    <section className="bg-foreground text-background text-center h-[75vh] grid place-content-center relative">
      <div className="container space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Empower Your Business: <br /> Create and Sell with Busell
        </h1>
        <p className="md:text-lg opacity-50">
          A collection of high-performing and well-designed Framer <br />{" "}
          templates to set up your website
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            <ShoppingBag className="mr-2" />
            Browse Collecitons
          </Button>
          <Button variant="outline" size="lg">
            About Us
          </Button>
        </div>
      </div>
      <Image
        width={700}
        height={700}
        src="/line-waves.svg"
        alt="SVG waves"
        className="absolute -top-12 left-0"
      />
      <Image
        width={700}
        height={700}
        src="/line-waves.svg"
        alt="SVG waves"
        className="absolute top-0 right-0 rotate-180"
      />
    </section>
  )
}

export default HeroCTA

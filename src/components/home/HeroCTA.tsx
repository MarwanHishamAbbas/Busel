import { FC } from "react"
import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"

interface HeroCTAProps {}

const HeroCTA: FC<HeroCTAProps> = ({}) => {
  return (
    <section className="bg-foreground text-background text-center h-[75vh] grid place-content-center">
      <div className="container space-y-6">
        <h1 className="text-4xl md:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
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
    </section>
  )
}

export default HeroCTA

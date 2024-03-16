import HeroCTA from "@/components/home/HeroCTA"
import MostPopular from "@/components/home/MostPopular"
import { FC } from "react"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <main>
      <HeroCTA />
      <MostPopular />
    </main>
  )
}

export default HomePage

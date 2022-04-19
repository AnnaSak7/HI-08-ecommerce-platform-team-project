import Image from "next/image";
import ProductList from "../components/products/ProductList";
import Navbar from "../components/ui/Navbar";
import Hero from '../public/HeroImage.png'

export default function Home() {
  return (
    <div>
      <div id="hero">
        <Image src={Hero} alt="Hero" />
      </div>
      <ProductList />
    </div>
  )
}

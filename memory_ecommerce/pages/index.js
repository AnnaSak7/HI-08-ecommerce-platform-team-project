import Head from "next/head";
import Image from "next/image";
import ProductList from "../components/products/ProductList";
import Navbar from "../components/ui/Navbar";
import Hero from '../public/HeroImage.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Memory | Home</title>
        <meta name='description' content="Memory store" />
      </Head>
    <div>
      <div id="hero">
        <Image id="hero-image" src={Hero} alt="Hero" />
      </div>
      <ProductList />
    </div>
    </>
  )
}

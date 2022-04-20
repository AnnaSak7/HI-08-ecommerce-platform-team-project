import { MongoClient } from "mongodb";
import Head from "next/head";
import Image from "next/image";
import ProductList from "../components/products/ProductList";
import Navbar from "../components/ui/Navbar";
import Hero from '../public/HeroImage.png'

export default function Home(props) {
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
      <ProductList memories={props.memories}/>
    </div>
    </>
  )
}


export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const memoryCollection = db.collection('memories')
  const memories = await memoryCollection.find().toArray()

  client.close()

  return{
    props: {
      memories: memories.map(memory => ({
        id: memory._id.toString(),
        name: memory.name,
        image: memory.image,
        description: memory.description
      }))
    },
    revalidate: 10,
  }
}
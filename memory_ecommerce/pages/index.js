import { MongoClient } from "mongodb";
import Head from "next/head";

import ProductList from "../components/products/ProductList";
import Navbar from "../components/ui/Navbar";
import Hero from '../components/ui/Hero'


export default function Home(props) {
  console.log(props.memories)
  return (
    <>
      <Head>
        <title>Memory | Home</title>
        <meta name='description' content="Memory store" />
      </Head>
    <Hero />
      <ProductList memories={props.memories}/>
    
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
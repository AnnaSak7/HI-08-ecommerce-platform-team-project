// domain.com/product

import Head from "next/head"
import ProductDetail from "../../components/products/ProductDetail"

const AnimeDetails= (props)=>{
    return(
        <>
        <Head>
            <title>{props.memoryData.name}</title>
            <meta name='description' content={props.memoryData.genre} />
        </Head>
        <ProductDetail image={props.memoryData.image} name={props.memoryData.name} genre={props.memoryData.genre}/>
        </>
    )
}
import React from 'react'
import ProductCardEven from './ProductCardEven'
import ProductCardOdd from './ProductCardOdd'
import { DUMMY_LIST } from './DummyData'

const ProductList = () => {

  return (
    <>
    <ProductCardOdd name={DUMMY_LIST[0].name} image={DUMMY_LIST[0].image} description={DUMMY_LIST[0].description} />
    <ProductCardEven name={DUMMY_LIST[1].name} image={DUMMY_LIST[1].image} description={DUMMY_LIST[1].description} color='#F6F3F0' />
    <ProductCardOdd name={DUMMY_LIST[2].name} image={DUMMY_LIST[2].image} description={DUMMY_LIST[2].description} color='#46423F' />
    <ProductCardEven name={DUMMY_LIST[3].name} image={DUMMY_LIST[3].image} description={DUMMY_LIST[3].description} color='#B3A497' />
    <ProductCardOdd name={DUMMY_LIST[0].name} image={DUMMY_LIST[0].image} description={DUMMY_LIST[0].description} color='#B5E0DF' />
    </>
  )
}

export default ProductList
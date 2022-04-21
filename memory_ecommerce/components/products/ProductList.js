import React from 'react'
import ProductCardEven from './ProductCardEven'
import ProductCardOdd from './ProductCardOdd'

const colors = ['#5FA0A4', '#F6F3F0', '#46423F', '#B3A497', '#B5E0DF']

const ProductList = (props) => {
   
    
  return (
    <>
    {/* <ProductCardOdd name={DUMMY_LIST[0].name} image={DUMMY_LIST[0].image} description={DUMMY_LIST[0].description} />
    <ProductCardEven name={DUMMY_LIST[1].name} image={DUMMY_LIST[1].image} description={DUMMY_LIST[1].description} color='#F6F3F0' />
    <ProductCardOdd name={DUMMY_LIST[2].name} image={DUMMY_LIST[2].image} description={DUMMY_LIST[2].description} color='#46423F' />
    <ProductCardEven name={DUMMY_LIST[3].name} image={DUMMY_LIST[3].image} description={DUMMY_LIST[3].description} color='#B3A497' />
    <ProductCardOdd name={DUMMY_LIST[0].name} image={DUMMY_LIST[0].image} description={DUMMY_LIST[0].description} color='#B5E0DF' />
   */}
   {props.memories.map((memory, index, color) => (
        index%2 === 1 ?
        <ProductCardEven key={memory.id} name={memory.name} image={memory.image} description={memory.description} color={colors[index]} />
        : 
        <ProductCardOdd key={memory.id} name={memory.name} image={memory.image} description={memory.description} color={colors[index]} />
    
   ))}
    </>
  )
}

export default ProductList
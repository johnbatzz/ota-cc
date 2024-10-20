import React from 'react'
import Products from './Products'

const ProductList = ({forYou, hot, features, unlisted}) => {
  return (
    <div className='product-container'>
		<Products list={forYou} title='For You' />
		<Products list={hot} title='Hot Products' />
		<Products list={features} title='Featured' />
		<Products list={unlisted} title='Others' />
    </div>
  )
}

export default ProductList
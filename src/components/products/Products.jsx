import React from 'react'
import CardList from './CardList'

const Products = ({list, title}) => {
  return (
    <section className='products'>
        <div className="header">
            <span className='title'>{title}</span>
            <a href='#' className='see-all'>See all</a>
        </div>
        <CardList list={list} />
    </section>
  )
}

export default Products
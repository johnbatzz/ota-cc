import React from 'react'
import Card from '../Card'

const CardList = ({list}) => {
  return (
    <div className='card-list'>
        {list.map((item, index) => (
            <Card key={index} item={item} />    
        ))}
    </div>
  )
}

export default CardList
import React from 'react'
import ImageWithFallback from './ImageWithFallback'

const Heading = ({name = 'Guest'}) => {
  return (
    <div className="heading">
        <ImageWithFallback 
            src={'/image/profile.jpg'} 
            alt={'profile.jpg'} 
            fallbackSrc={'https://via.placeholder.com/300x200'}
            height='46px'
            width='46px' 
        />
        <div className="heading-text">
            <span className='heading-text_welcome'>Welcome to e-commerce!</span>
            <span className='heading-text_greetings'>Good Morning, {name}</span>
        </div>
    </div>
  )
}

export default Heading
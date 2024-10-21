import React from 'react'
import { calculatePercentage } from '../assets/utils/helper'
import ImageWithFallback from './ImageWithFallback'

const Card = ({item}) => {
    const percentage = calculatePercentage(item.progress)
    return (
        <div className="card">
            <div className="card-image-container">
                <ImageWithFallback 
                    src={item.product_image} 
                    alt={item.title} 
                    fallbackSrc={'https://via.placeholder.com/300x200'}
                />
            </div>
            <div className="card-content">
                <img src={item.brand_image} alt={item.brand_name} className="card-image" />
                <div className="card-desc">
                    <div className='card-text'>
                         <div>{item.title}</div>
                        <div>{item.brand_name}</div>
                        <div>{item.product_name}</div>
                    </div>

                    <div className='progress-bar'>
                        <div className='progress-bar-inner' style={{width: `${percentage}%`, color: `#702fd3`}}></div>
                    </div>
                    <span className='percentage'>{percentage} % Complete</span>
                </div>
            </div>
        </div>
    )
}

export default Card
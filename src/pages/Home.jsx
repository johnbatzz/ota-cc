import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import data  from '../json/data'
import { FOR_YOU, HOT, FEATURES, NULL } from '../constants'
import ProductList from '../components/products/ProductList'

const Home = () => {
    const [forYou, setForYou] = useState([]);
    const [features, setFeatures] = useState([]);
    const [hot, setHot] = useState([]);
    const [unlisted, setUnlisted] = useState([]);
    useEffect(() => {
        setForYou(data.filter(item => item.lane === FOR_YOU));
        setFeatures(data.filter(item => item.lane === FEATURES));
        setHot(data.filter(item => item.lane === HOT));
        setUnlisted(data.filter(item => item.lane === NULL));
    }, [])

    return (
        <div className='home'>
            <Heading/>
            <ProductList forYou={forYou} hot={hot} features={features} unlisted={unlisted}/>
        </div>
    )
}

export default Home
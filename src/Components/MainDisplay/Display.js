import React, { useState, useEffect } from 'react';
import NasaAPI from '../../calls'

// Components
import { ImgContainer } from './ImgContainer'

export const Display = () => {

    const [apod, setApod] = useState({});

    // useEffect
    useEffect(() => {
        // API key in case Rate limited
        NasaAPI.fetchKey('2000', '7', '10')
        .then(res => setApod(res.data))

        // Demo Key
        // NasaAPI.fetchDemo('1996', '7', '10')
    }, [])

    console.log(apod)

    return (
        <div>
            <ImgContainer obj={apod} />
        </div>
    )
}
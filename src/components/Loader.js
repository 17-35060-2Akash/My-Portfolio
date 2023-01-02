import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Loader = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/loader.json')
        })
    }, []);

    return (
        <div className='container  lg:w-1/2 mx-auto ' ref={container}>

        </div>
    );
};

export default Loader;
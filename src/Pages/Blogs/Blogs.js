import React, { useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import lottie from 'lottie-web';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');

    const [text] = useTypewriter({
        words: ['Blogs Coming Soon . . .'],
        loop: 10,
        typeSpeed: 180,
        delaySpeed: 400,
        deleteSpeed: 120
    });


    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/yoga.json')
        })
    }, []);

    return (
        <div
            data-aos="fade-left"
        // data-aos="zoom-in-right"
        >
            <div className='my-40 mb-10'>
                <h1 className='text-xl md:text-2xl'>{text}
                    <span className='text-secondary font-bold'><Cursor /></span>
                </h1>

            </div>
            <div className='container w-3/4 md:w-1/2 mx-auto pb-10 mb-40 lg:mb-60 mt-20' ref={container}>

            </div>
        </div>
    );
};

export default Blogs;
import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import lottie from 'lottie-web';

const FindMe = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/coding3.json')
        })
    }, []);

    return (
        <div>
            <div className=' lg:mx-40 md:40'>
                <p className='text-2xl md:px-4 md:text-3xl mt-40 mb-16 font-lighter uppercase pb-3' >
                    <span className='bg-white px-2 py-2.5 pb-3 mb-32'>
                        <span className='bg-secondary px-4 pb-1 pt-0.5'>Find Me</span>
                        <span className='text-black font-bold pr-1'> On</span>
                    </span></p>

                <a href={'https://www.linkedin.com/in/nasin-ayenul-akash/'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none w-2/3  md:w-4/12 lg:w-1/4 '><FaLinkedin className='text-2xl mr-2 '></FaLinkedin> LinkedIn</button>
                </a>
                <a href={'https://www.facebook.com/nasin.akash/'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none w-2/3  md:w-4/12 lg:w-1/4 '><FaFacebook className='text-2xl mr-2 '></FaFacebook> Facebook</button>
                </a>
                <a href={'https://na.akash715@gmail.com'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none w-2/3  md:w-4/12 lg:w-1/4 '><FaMailBulk className='text-2xl mr-2 '></FaMailBulk> Gmail</button>
                </a>


            </div>
            <div className='container w-3/4 md:w-1/2 mx-auto pb-30 mt-10 md:mt-20  lg:mt-20 mb-40 md:mb-44' ref={container}>

            </div>
        </div>
    );
};

export default FindMe;
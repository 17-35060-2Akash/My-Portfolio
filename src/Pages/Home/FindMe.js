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
        <div
            data-aos="fade-left"
            data-aos-offset="600"
            data-aos-easing="ease-out-sine"
        >
            <div className=' lg:px-40 '>
                <p className='text-2xl md:px-4 md:text-3xl mt-40 mb-16 font-lighter uppercase pb-3' >
                    <span className='bg-white px-1.5 py-2 pb-2.5 pt-2.5 md:pt-2'>
                        <span className='bg-secondary px-3.5 pb-1 pt-1 md:pt-0.5'>Find Me</span>
                        <span className='text-black font-bold pr-1'> On</span>
                    </span>
                    {/* <span className='bg-white px-2 py-2.5 pb-3 mb-32'>
                        <span className='bg-secondary px-4 pb-1 pt-0.5'>Find Me</span>
                        <span className='text-black font-bold pr-1'> On</span>
                    </span> */}
                </p>

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
            <div
                data-aos="zoom-in-right"
                /*  data-aos="fade-right"
                 data-aos-offset="600"
                 data-aos-easing="ease-out-sine" */
                className='container w-3/4 md:w-1/2 mx-auto pb-30 mt-10 md:mt-20  lg:mt-20 mb-40 md:mb-44' ref={container}>

            </div>
        </div>
    );
};

export default FindMe;
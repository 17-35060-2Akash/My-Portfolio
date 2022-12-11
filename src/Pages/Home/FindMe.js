import React from 'react';
import { FaFacebook, FaLinkedin, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const FindMe = () => {
    return (
        <div className='mb-20 md:mb-36'>
            <p className='text-2xl md:px-4 md:text-3xl mt-40 mb-16 font-lighter uppercase pb-3' >
                <span className='bg-white px-3 py-2 pb-3'>
                    <span className='bg-secondary px-3 pb-1'>Find Me</span>
                    <span className='text-black font-bold pr-1'> On</span>
                </span></p>

            <a href={'https://www.linkedin.com/in/nasin-ayenul-akash/'} target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none'><FaLinkedin className='text-2xl mr-2 '></FaLinkedin> LinkedIn</button>
            </a>
            <a href={'https://www.facebook.com/nasin.akash/'} target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none'><FaFacebook className='text-2xl mr-2 '></FaFacebook> Facebook</button>
            </a>
            <a href={'https://na.akash715@gmail.com'} target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary hover:btn-secondary text-white m-5 px-10 rounded-none'><FaMailBulk className='text-2xl mr-2 '></FaMailBulk> Gmail</button>
            </a>


        </div>
    );
};

export default FindMe;
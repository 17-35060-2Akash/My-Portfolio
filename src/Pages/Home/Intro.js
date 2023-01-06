import React from 'react';
import { FaFile, FaFileAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import mypro from '../../assets/images/mypro.jpg';
import mypro from '../../assets/images/mypro11.png';


const Intro = () => {

    const [text] = useTypewriter({
        words: ['This is Nasin Ayenul Akash, a young and creative web developer. Need a Web Developer today who can relate to your vision easily? Engage with me in no time!'],
        loop: 3,
        typeSpeed: 120,
        delaySpeed: 400,
        deleteSpeed: 70
    });

    return (
        <section
            data-aos="fade-left"
            data-aos-offset="600"
            data-aos-easing="ease-out-sine"
            className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:mt-10">
                    <img src={mypro} className=" lg:w-1/2 md:w-2/3 rounded-lg pl-3 mt-10 md:mt-28 lg:mt-0" alt='' />
                    <div className='md:pl-5 text-center md:text-start w-2/3 mt-20 lg:mt-0'>
                        <p className='text-2xl md:px-4 md:text-xl mb-7 font-lighter uppercase pb-3' >
                            <span className='bg-white px-1 py-2 pb-2.5 pt-2.5 md:pt-2'>
                                <span className='bg-primary px-3.5 pb-1.5 pt-1.5 md:pt-1'>Hello</span>
                                <span className='text-black font-bold pr-1'> There</span>
                            </span>
                            {/* <span className='bg-white px-2 pt-3 md:pt-3.5 pb-3.5'>
                                <span className='bg-primary px-4 pb-1.5 pt-1 text-2xl'>Hello</span>
                                <span className='text-primary font-semibold pb-1.5 pr-1 text-2xl'> There!</span>
                            </span> */}

                        </p>
                        {/*  <p className='text-xl md:px-4  font-lighter '>This is Nasin Ayenul Akash, a young and creative web developer.
                            Need a Web Developer today who can relate to your vision easily? Engage with me in no time!
                        </p> */}
                        <p className='text-lg md:text-2xl md:px-4 lg:pt-3 font-lighter h-52 md:h-36 lg:h-40 uppercase'>
                            {text}
                            <span className='text-primary font-bold'><Cursor /></span>
                        </p>
                        <a target='_blank' href='https://drive.google.com/file/d/1gXR0Zpzfp4TA0rfGdtD39SxdDTLwH8nN/view?usp=sharing'>
                            <button className="btn btn-primary md:ml-4 mt-12 w-3/5 md:w-1/2 text-white border-0 rounded-none bg-secondary">MY RESUME</button>
                        </a>
                        {/* <div className=''>
                            <a target='_blank' href='https://drive.google.com/file/d/1gXR0Zpzfp4TA0rfGdtD39SxdDTLwH8nN/view?usp=sharing'>
                                <button className="btn btn-primary md:ml-4 mt-10 w-1/3 text-white border-0 rounded-none bg-secondary mb-2"><FaFileAlt className='text-2xl mr-2 '></FaFileAlt>RESUME</button>
                            </a>
                            <a target='_blank' href='https://github.com/17-35060-2Akash'>
                                <button className="btn btn-primary md:ml-4 mt-15 w-1/3 text-white border-0 rounded-none bg-secondary  mb-2"><FaGithub className='text-2xl mr-2 '></FaGithub> GitHub</button>
                            </a>
                        </div> */}

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Intro;
/* 
Operationg form Bangladesh, I currently focus on MERN Stack Development for rapid and reliable systems to ensure
                            quicker deployments. */
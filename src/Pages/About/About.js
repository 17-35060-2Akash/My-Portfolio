import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import img from '../../assets/Logo/portlogo2.png';

const About = () => {
    const [text] = useTypewriter({
        words: ['Photography', 'Painting and Sketching', ' Music and Playing Instruments(Guitar, Harmonium, Ukulele)', 'Reading Books', 'Writing', 'Cooking', 'Travelling', 'Watching Movies and Computer Games'],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 400,
        deleteSpeed: 70
    });

    return (
        <div className='py-20 mb-10'>
            <p className='text-2xl md:px-4 md:text-3xl my-20 font-lighter uppercase pb-3' >
                <span className='bg-white px-2 py-2 pb-3'>
                    <span className='bg-secondary px-4 pb-1'>About</span>
                    <span className='text-black font-bold pr-1'> Me</span>
                </span></p>
            <div className="hero">
                <div className="hero-content grid gap-10 grid-cols-1 px-16">
                    {/* <img src={mypro} className=" lg:w-1/2 md:w-2/3 rounded-lg" alt='' /> */}
                    <div className='md:pl-5 text-center md:text-start'>

                        <p className='text-xl md:px-4  font-lighter mb-10'>This is Nasin Ayenul Akash, a young and creative web developer.
                            Operating form Bangladesh, I currently focus on MERN Stack Development for rapid and reliable systems to ensure
                            quicker deployments. I graduated from <span className='text-cyan-400'>American International University Bangladesh </span>
                            honored by a <span className='text-cyan-400'>BSc degree in
                                the CS program in 2022</span>. Learning and trying out new things, these are my passion since boyhood and maybe it'll stay
                            as I breathe.
                        </p>
                        <p className='text-xl md:px-4  font-lighter mb-10'>
                            I think I've the ability of pursuing new experiences and adapting quick, Conscientious,
                            Desire towards creative deeds, Decision making ability in critical situations. I'm Ambivert
                            and have good sense of humor. I like to tryout critical problems and solving by even thinking out of
                            the box with a positive attitude. And Hardworking and punctual because other things hamper without these two.
                        </p>
                        <p className='text-xl md:px-4  font-lighter mb-10 h-10'>
                            I've immense interest in
                            <span className='text-2xl text-secondary font-semibold'> {text}.</span>
                            <span className='text-secondary font-bold'><Cursor /></span>

                        </p>

                    </div>

                    <div className='flex justify-end'>
                        <img className='w-2/3 md:w-1/3 lg:w-1/4' src={img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;

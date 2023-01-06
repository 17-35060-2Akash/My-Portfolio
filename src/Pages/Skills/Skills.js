import React, { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import lottie from 'lottie-web';
import useTitle from '../../Hooks/useTitle';

const Skills = () => {
    useTitle('My Skills');
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/skills.json')
        })
    }, []);

    return (
        <div
            data-aos="fade-left"
            // data-aos="zoom-in-right"
            className='my-10 md:my-28 md:mb-28 mx-10 lg:mx-48'>



            <p className='text-2xl md:px-4 md:text-3xl mt-32 md:mt-32 mb-32 md:mb-44 font-lighter uppercase pb-3' >
                <span className='bg-white px-1.5 py-2 pb-2.5 pt-2.5 md:pt-2'>
                    <span className='bg-primary px-3.5 pb-1 pt-1 md:pt-0.5'>My</span>
                    <span className='text-black font-bold pr-1'> Skills</span>
                </span>
                {/* <span className='bg-white px-2 py-2 pb-3 pt-3 md:pt-2.5'>
                    <span className='bg-primary px-4 pb-1 pt-1 md:pt-0.5'>My</span>
                    <span className='text-black font-bold pr-1'> Skills</span>
                </span> */}

            </p>


            {/* <div className='my-16 md:mt-20 md:text-end'>
                <a href={'https://github.com/17-35060-2Akash'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white  px-20 rounded-none'><FaGithub className='text-2xl mr-2 '></FaGithub> Github</button>
                </a>
            </div> */}



            {/* skills grid  */}
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='md:pl-5 text-start'>


                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>HTML5</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>CSS3</span>

                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Bootstrap</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Tailwind</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>JavaScript(ES6)</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>PHP</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>React.js</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Express.js</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Node.js</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>MongoDB</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>MySQL</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>React Router</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>React Query</span>

                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>React Hooks</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>TypeScript</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Next.js</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Redux</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>JWT</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Stripe</span>
                    </div>




                </div>
                {/* /// tools  //  */}
                <div className='md:pl-5 text-end md:mt-0 mt-16'>


                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>VS</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>VS Code</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'> Chrome Dev Tool</span>

                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>GitHub</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Firebase</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Netlify</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Vercel</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Figma</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Photoshop</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Desktop Application</span>
                    </div>

                    <br /> <br />
                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>C</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>C++</span>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Java</span>
                    </div>

                    <div className='mb-5'>
                        <span className='text-xl border hover:bg-secondary hover:border-secondary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>C#</span>
                        <span className='text-xl border hover:bg-primary hover:border-primary hover:text-white px-2 pb-1.5 pt-1  md:pt-0.5 mx-1 bg-slate-100 text-gray-700'>Python</span>
                    </div>



                </div>


            </div>
            <div className='my-16 md:mt-20 md:text-end'>
                <a href={'https://github.com/17-35060-2Akash'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white  px-20 rounded-none'><FaGithub className='text-2xl mr-2 '></FaGithub> Github</button>
                </a>
            </div>
            <div
                data-aos="zoom-in-up"
                className='container  lg:w-1/2 mx-auto pb-20' ref={container}>

            </div>
        </div>
    );
};

export default Skills;
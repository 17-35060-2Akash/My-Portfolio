import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='my-10 md:my-28 md:mb-40 mx-10 lg:mx-48'>



            <p className='text-2xl md:px-4 md:text-3xl mt-20 md:mt-32 font-lighter uppercase pb-3' >
                <span className='bg-white px-2 py-2 pb-3 '>
                    <span className='bg-primary px-4 pb-1'>My</span>
                    <span className='text-black font-bold pr-1'> Skills</span>
                </span></p>

            <div className='my-16 md:mt-20 md:text-end'>
                <a href={'https://github.com/17-35060-2Akash'} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white  px-20 rounded-none'><FaGithub className='text-2xl mr-2 '></FaGithub> Github</button>
                </a>
            </div>



            {/* skills grid  */}
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='md:pl-5 text-start'>


                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>HTML5</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>CSS3</span>

                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Bootstrap</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Tailwind</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>JavaScript(ES6)</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>PHP</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>React.js</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Express.js</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Node.js</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>MongoDB</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>MySQL</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>React Router</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>React Query</span>

                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>React Hooks</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>TypeScript</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Next.js</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Redux</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>JWT</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Stripe</span>
                    </div>




                </div>
                {/* /// tools  //  */}
                <div className='md:pl-5 text-end md:mt-0 mt-16'>


                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>VS</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>VS Code</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'> Chrome Dev Tool</span>

                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>GitHub</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Firebase</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Netlify</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Vercel</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Figma</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Photoshop</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Desktop Application</span>
                    </div>

                    <br /> <br />
                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>C</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>C++</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Java</span>
                    </div>

                    <div className='mb-4'>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>C#</span>
                        <span className='text-xl border px-2 pb-1 mx-1 bg-slate-100 text-gray-700'>Python</span>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Skills;
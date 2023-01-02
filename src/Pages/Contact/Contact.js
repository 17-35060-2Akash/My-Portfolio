import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import useTitle from '../../Hooks/useTitle';

const Contact = () => {
    useTitle('Contact Me');
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/email.json')
        })
    }, []);

    return (
        <div className='h-[1300px] md:h-[1300px] lg:h-[1400px] flex flex-col justify-center items-center'>
            <div className='container md:w-2/4 lg:w-3/12 mx-auto' ref={container}>

            </div>

            <p style={{ zIndex: 10 }} className='text-2xl md:px-4 md:text-3xl mb-24 -mt-16  lg:-mt-14 font-lighter uppercase pb-3' >
                <span className='bg-white px-2 py-2 pt-2.5 pb-3'>
                    <span className='bg-secondary px-4 pb-1 pt-0.5'>Send</span>
                    <span className='text-black font-bold pr-1'> Email</span>
                </span></p>
            <div className='w-96 p-9  shadow-xl rounded-xl glass'>
                {/* <h2 className='text-2xl text-center font-lighter mb-9 font-lighter'>Send Me An Email</h2> */}
                <form action='https://formspree.io/f/mvoyedzp' method='POST' >

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Name</span></label> */}
                        <input type="text" name="name"
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4 text-black" placeholder='Name' />

                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Email</span></label> */}
                        <input type="email" name="email"
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4 text-black" placeholder='Email' />
                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Name</span></label> */}
                        <textarea
                            name='message' className="textarea  h-36 w-full py-5 mb-5 text-black text-md px-4" placeholder="Message" title='not more than 200 words' ></textarea>
                    </div>

                    <input type="submit" value="Send" className='btn btn-neutral text-lg w-full bg-secondary text-white border-0 ' />

                </form>

            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Blogs = () => {
    const [text] = useTypewriter({
        words: ['Blogs Coming Soon . . .'],
        loop: 2,
        typeSpeed: 180,
        delaySpeed: 400,
        deleteSpeed: 120
    });

    return (
        <div className='my-40 mb-60'>
            <h1 className='text-2xl'>{text}
                <span className='text-secondary font-bold'><Cursor /></span>
            </h1>

        </div>
    );
};

export default Blogs;
import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../../assets/images/title.png';

const Introduction = () => {
    return (
        <div>
            <Link to='/' className="normal-case" >
                <img className='w-40 logo-img p-4 text-start' src={title} alt="" />
            </Link>
        </div>
    );
};

export default Introduction;
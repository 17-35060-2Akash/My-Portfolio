import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Introduction from '../Introduction/Introduction';
import title from '../../../assets/images/title.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = <>
        {
            <>
                <li className='font-semibold mx-5 hover:text-secondary pb-2 '><Link to='/'>Portfolio</Link></li>
                <li className='font-semibold mx-5 hover:text-secondary pb-2 '><Link to='/about'>About</Link></li>
                <li className='font-semibold mx-5 hover:text-secondary pb-2 '><Link to='/skills'>Skills</Link></li>
                {/* <li className='font-semibold mx-5 hover:text-secondary pb-2 '><Link to='/projects'>Projects</Link></li> */}
                <li className='font-semibold mx-5 hover:text-secondary pb-2 '><Link to='/blogs'>Blogs</Link></li>
                <li className='font-semibold ml-5 hover:text-secondary pb-2 '><Link to='/contact'>Contact Me</Link></li>
                {/* <button className='btn btn-secondary ml-2'>Logout</button> */}
            </>
        }
    </>

    const dropDownMenu = <>
        {
            <>
                <li className='font-semibold   hover:text-secondary py-1 '><Link to='/'>Portfolio</Link></li>
                <li className='font-semibold   hover:text-secondary py-1 '><Link to='/about'>About</Link></li>
                <li className='font-semibold   hover:text-secondary py-1 '><Link to='/skills'>Skills</Link></li>
                {/* <li className='font-semibold   hover:text-secondary py-1 '><Link to='/projects'>Projects</Link></li> */}
                <li className='font-semibold   hover:text-secondary py-1 '><Link to='/blogs'>Blogs</Link></li>
                <li className='font-semibold   hover:text-secondary py-1 '><Link to='/contact'>Contact Me</Link></li>
                {/* <button className='btn btn-secondary ml-2'>Logout</button> */}
            </>
        }
    </>

    return (
        <div>
            {/* <Introduction></Introduction> */}
            <div className="navbar pb-5 pt-8 md:pt-0">
                <div className="dropdown">
                    <label
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        tabIndex={0} className="btn btn-ghost lg:hidden ml-2 md:ml-5 hover:bg-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        isMenuOpen && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 py-4 shadow bg-base-100 rounded-box w-52 text-black uppercase">
                            {dropDownMenu}
                        </ul>
                    }

                </div>
                <div className="navbar-end lg:navbar-start">
                    <Link to='/' className="normal-case rounded-lg" >
                        <img className='w-40 md:w-72  md:mt-12 lg:mt-12 logo-img p-4 ml-40 md:ml-96 lg:ml-20 border' src={title} alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex mb-36 mr-20 border-b-4">
                    {/* main menu  */}
                    <ul className="menu menu-horizontal uppercase">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                {
                    user?.email ?

                        <p className='text-xl font-medium title-name mr-5'>Hi, <span className='text-blue-600 '>{user.displayName}</span></p>
                        :
                        <></>

                }
            </div> */}

            </div>
        </div>
    );
};

export default Navbar;
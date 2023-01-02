import React, { Fragment } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const ProjectCard = ({ project, handleDescription }) => {
    // console.log(project);
    const { category_id, image, short_description, name, thumbnail_img } = project;
    return (
        <Fragment>
            <Link to={`/projects/${category_id}`}>
                <div onMouseEnter={() => handleDescription(project)} className="options-div ">
                    <div className="card glass bg-base-100 shadow-xl rounded-sm">
                        <figure><img src={thumbnail_img} alt="Shoes" /></figure>
                        <div className="card-body flex justify-between">
                            <div className='flex justify-center'>
                                {/* <img className='w-1/4' src={logo} alt="" /> */}
                                <h2 className="card-title text-black font-bold text-2xl md:text-xl lg:text-2xl text-secondary">{name}</h2>

                            </div>
                            <div className="card-actions justify-end">
                                {/* <Link to={`/category/${_id}`}> */}
                                {/* <button className="btn btn-secondary md:text-md lg:text-xl text-white px-5 py-3"><FaArrowRight></FaArrowRight></button> */}
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};

export default ProjectCard;
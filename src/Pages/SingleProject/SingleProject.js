import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const SingleProject = () => {
    const project = useLoaderData();
    const { image, thumbnail_img, long_description, links, name } = project;

    useTitle(`${name}`);
    // const params = useParams();

    // console.log(params.id);

    /* const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('projects.json');
            const data = await res.json();
            return data;
        }
    }); */


    // const [project, setProject] = useState({});

    // console.log(projects);
    // const singleProject = projects.find(project => project.category_id === parseInt(params.id));
    // console.log(singleProject);

    // const { thumbnail_img, long_description, links, name } = singleProject;
    // console.log(links)

    return (
        <div className=''>
            <div>
                <p className='text-2xl md:px-4 md:text-3xl mt-20 mb-5 font-lighter uppercase pb-3' >
                    <span className='bg-white px-2.5 py-2 pb-3 pt-3 md:pt-2.5'>
                        <span className='bg-secondary px-4 pb-1 pt-1 md:pt-0.5'>Project</span>
                        <span className='text-black font-bold pr-1'> Details</span>
                    </span>

                </p>
                <p className='text-3xl uppercase font-medium mb-20 mt-10'> {name}</p>

                <img className='w-2/3 mx-auto rounded-md my-10' src={image} alt="" />
            </div>



            <div className='text-start mx-5 md:mx-20 my-20 mb-32 bg-gray-900 px-10 py-16'>

                <div className='mb-10 mt-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[0][0]}:</h2>
                    <p>{long_description[0][1]}</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[1][0]}:</h2>
                    <p>{long_description[1][1]}</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[2][0]}:</h2>
                    <p>{long_description[2][1]}</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[3][0]}:</h2>
                    <p>{long_description[3][1]}</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[4][0]}:</h2>
                    <p>{long_description[4][1]}</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-secondary text-xl font-semibold uppercase'>{long_description[5][0]}:</h2>
                    <p>{long_description[5][1]}</p>
                </div>


            </div>



            <div className='mb-40'>
                <p className='text-2xl md:px-4 md:text-3xl my-20 font-lighter uppercase pb-3' >
                    <span className='bg-white px-2.5 py-2 pb-3 pt-3.5 md:pt-2.5'>
                        <span className='bg-primary px-3.5 pb-1 pt-1.5 md:pt-0.5'>Project</span>
                        <span className='text-black font-bold pr-1 pl-1 md:pl-0'> Links</span>
                    </span>
                </p>
                <a href={links[0][1]} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 rounded-none'>{links[0][0]}</button>
                </a>

                <a href={links[1][1]} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 rounded-none'>{links[1][0]}</button>
                </a>

                <a href={links[2][1]} target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-primary hover:btn-secondary text-white m-5 rounded-none'>{links[2][0]}</button>
                </a>
            </div>


        </div>

    );
};

export default SingleProject;
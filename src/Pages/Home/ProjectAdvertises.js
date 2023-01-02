import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Home.css';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';


const ProjectAdvertises = () => {


    const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-rho.vercel.app/projects');
            const data = await res.json();
            return data.slice(0, 3);
        }
    });
    const [catchProject, setCatchProject] = useState({});

    // console.log(projects);

    const handleDescription = project => {
        setCatchProject({});
        setCatchProject(project);
    };

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/lottie/loadingspriral.json')
        })
    }, []);

    if (isLoading) {
        return (
            <div className='container w-3/12  lg:w-3/12 mx-auto pt-40 pb-20' ref={container}>

            </div>
        );
    }


    return (
        <section className='my-7 mt-32 md:mt-44 lg:mt-32'>
            {/* <h2 className="text-4xl font-medium my-20 ml-1 text-secondary">Fresh Works</h2> */}
            <p className='text-2xl md:px-4 md:text-4xl my-20 font-lighter uppercase pb-3' >
                <span className='bg-white px-2 py-3 md:pt-2.5 pb-3'>
                    <span className='bg-secondary px-4 pb-1 pt-1 md:pt-0.5'>Fresh</span>
                    <span className='text-black font-bold pr-1'> Works</span>
                </span></p>

            <div className=" my-20 mb-96 md:mb-40 lg:mb-32 text-center">
                <div className='text-center'>
                    <h1 className='text-3xl md:px-4 md:text-4xl mb-7 font-lighter text-secondary' >{catchProject?.name}</h1>
                    {/* <p className='text-xl font-lighter  px-20 md:px-32 lg:px-52'>{catchProject?.description.slice(0, 240) + '...'} */}
                    <p className='text-xl font-lighter  px-20 md:px-32 lg:px-52 h-20'>{catchProject?.short_description}
                    </p>
                    {/* <a target='_blank' href='https://drive.google.com/file/d/1gXR0Zpzfp4TA0rfGdtD39SxdDTLwH8nN/view?usp=sharing'>
                            <button className="btn btn-primary ml-4 mt-7 w-2/3 text-white border-0 rounded-none bg-secondary ">MY RESUME</button>
                        </a> */}
                </div>
            </div>

            <div className="mb-28">
                <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-16 lg:mx-80'>
                    {
                        projects.map(project => <ProjectCard
                            key={project.category_id}
                            project={project}
                            handleDescription={handleDescription}></ProjectCard>)
                    }
                </div>
                <Link to='/allprojects'>
                    <div className='text-center mt-32'>
                        <button className="btn btn-primary  px-16 text-white border-0 rounded-none bg-secondary">More Works</button>
                    </div>
                </Link>


            </div>

        </section>
    );
};

export default ProjectAdvertises;
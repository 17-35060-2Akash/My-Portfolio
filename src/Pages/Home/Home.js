import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Contact from '../Contact/Contact';
import FindMe from './FindMe';
import Intro from './Intro';
import ProjectAdvertises from './ProjectAdvertises';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Intro></Intro>
            <ProjectAdvertises></ProjectAdvertises>
            <FindMe></FindMe>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;
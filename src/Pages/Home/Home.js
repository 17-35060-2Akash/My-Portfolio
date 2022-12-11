import React from 'react';
import FindMe from './FindMe';
import Intro from './Intro';
import ProjectAdvertises from './ProjectAdvertises';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <ProjectAdvertises></ProjectAdvertises>
            <FindMe></FindMe>
        </div>
    );
};

export default Home;
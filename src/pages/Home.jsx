import React from 'react';
import Avatar from '../components/Profile/Avatar';
import Bio from '../components/Profile/Bio';
import SocialLinks from '../components/Profile/SocialLinks';
import Skills from '../components/Profile/Skills';
import Experience from '../components/Profile/Experience';
import Certifications from '../components/Profile/Certifications';
import Education from '../components/Profile/Education';
import Projects from '../components/Profile/Projects';
import Publications from '../components/Profile/Publications';
import BlogPosts from '../components/Profile/BlogPosts';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Landing Page</h1>
            <Avatar />
            <Bio />
            <SocialLinks />
            <Skills />
            <Experience />
            <Certifications />
            <Education />
            <Projects />
            <Publications />
            <BlogPosts />
        </div>
    );
};

export default Home;
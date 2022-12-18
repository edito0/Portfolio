import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Resume from './Resume';

function Home() {
    return (
        <div className='globalContainer'>

            <div className='bg'>
                <Navbar />
                <Intro />
            </div>

            <div className='data'>
                <Resume />
            </div>

        </div>
    );
}

export default Home;

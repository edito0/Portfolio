import React from 'react';
import './css/intro.css';
import logo from '../image-1.jpg'
import graphic_1 from '../graphic-1.png'
import graphic_2 from '../graphic-2.png'
import graphic_3 from '../graphic-3.png'
import graphic_4 from '../graphic-4.png'
import graphic_5 from '../graphic-5.png'
import graphic_6 from '../graphic-6.png'



function Intro() {




    return (
        <>
            <div className='intro-container'>
                <div className='intro-top'></div>
                <div className='intro-white-line'></div>
                <div className='intro-image'><img src={logo} alt="" /></div>
                <div className='intro-detail'>
                    <h1>Hi, I'm</h1>
                    <h1>Mohit Bagdi</h1> 
                    <p>I am enthusiastic about coding and technology</p>
                    <a download href="https://drive.google.com/drive/folders/1ZzON_XuxHExQTIs6RtsuoWuAdOBAty3f?usp=share_link" target='_blank' className='btn-cv'>Download CV</a>
                </div>


                <img className='graphic-1' src={graphic_1} />
                <img className='graphic-2' src={graphic_2} />
                {/* <img className='graphic-3' src={graphic_3} /> */} 
                <img className='graphic-4' src={graphic_4} />
                <img className='graphic-5' src={graphic_5} />
                <div className='say'>
                    <svg width="200" height="84" viewBox="0 0 200 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='path1' d="M17.1934 58.6836C25.6934 58.6836 48.1804 54.5337 39.7797 39.7459C32.192 26.3892 2.81479 33.467 5.56896 63.1809C7.83016 87.5763 42.2553 80.1443 54 66" stroke="black" stroke-width="9" />
                        <path className='path1' d="M82.5 35.5C44.4628 38.9284 42.2182 95.326 85.1918 67.4102C85.2631 47.2127 96.412 14.486 101 5.00001" stroke="black" stroke-width="9" />
                        <path className='path1' d="M113.489 17.2661C115.535 14.0636 118.778 8.23943 115.378 10.5632C111.128 13.4678 112.354 15.8648 113.489 17.2661Z" stroke="black" stroke-width="9" />
                        <path className='path1' d="M127.25 24.3661C134.644 26.5078 151.028 34.6998 166.567 23.1209" stroke="black" stroke-width="9" />
                        <path className='path1' d="M92.5 73C99.8659 68.5566 103.135 60.1764 110.112 38.2358C117.691 14.4065 92.5 89 131 68" stroke="black" stroke-width="9" />
                        <path className='path1' d="M160.95 2.76639C142.707 28.0581 114.831 84.8733 149.349 72.6353L157.438 69.877" stroke="black" stroke-width="9" />
                        <path className='path1' d="M182.111 32.1159C158.84 29.3514 149.572 76.9582 171.241 75.5759C189.588 75.5759 207.741 35.2808 182.111 32.1159Z" stroke="black" stroke-width="9" />
                    </svg>


                </div>
                <div className='say'>
                    <svg width="200" height="84" viewBox="0 0 200 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='path2' d="M17.1934 58.6836C25.6934 58.6836 48.1804 54.5337 39.7797 39.7459C32.192 26.3892 2.81479 33.467 5.56896 63.1809C7.83016 87.5763 42.2553 80.1443 54 66" stroke="black" stroke-width="9" />
                        <path className='path2' d="M82.5 35.5C44.4628 38.9284 42.2182 95.326 85.1918 67.4102C85.2631 47.2127 96.412 14.486 101 5.00001" stroke="black" stroke-width="9" />
                        <path className='path2' d="M113.489 17.2661C115.535 14.0636 118.778 8.23943 115.378 10.5632C111.128 13.4678 112.354 15.8648 113.489 17.2661Z" stroke="black" stroke-width="9" />
                        <path className='path2' d="M127.25 24.3661C134.644 26.5078 151.028 34.6998 166.567 23.1209" stroke="black" stroke-width="9" />
                        <path className='path2' d="M92.5 73C99.8659 68.5566 103.135 60.1764 110.112 38.2358C117.691 14.4065 92.5 89 131 68" stroke="black" stroke-width="9" />
                        <path className='path2' d="M160.95 2.76639C142.707 28.0581 114.831 84.8733 149.349 72.6353L157.438 69.877" stroke="black" stroke-width="9" />
                        <path className='path2' d="M182.111 32.1159C158.84 29.3514 149.572 76.9582 171.241 75.5759C189.588 75.5759 207.741 35.2808 182.111 32.1159Z" stroke="black" stroke-width="9" />
                    </svg>
                    <img className='graphic-6' src={graphic_6} />

                </div>
 
            </div>

        </>
    );
}

export default Intro;
